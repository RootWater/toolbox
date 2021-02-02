import { join, relative as relativeDir } from 'path';
import _ from 'lodash';
import { name as pkgName, dependencies } from '../../package.json';
import fs from 'fs';

/** 获取项目目录下的文件地址 */
export const resolve = (...paths: string[]) => join(__dirname, '../../', ...paths);

/** 获取 src 下的路径 */
export const resolveSrc = (...paths: string[]) => resolve('src', ...paths);

/** 大驼峰 */
export const bigCamelCase = (str: string) => _.upperFirst(_.camelCase(str));

/**
 * 获取打包时忽略的依赖
 * @description 默认会排除打包所有生产环境依赖
 *
 * @param externalIgnore 需要参与打包的依赖集合
 */
export const getExternal = (externalIgnore?: string[]) =>
	Object.keys(dependencies ?? {}).filter((pkg) => !(externalIgnore ?? []).includes(pkg));

/** 获取文件大小 */
export const getSize = (code: string) => `${(code.length / 1024).toFixed(2)}kb`;

/** 获取文件相对于根目录的路径 */
export const relative = (to: string) => relativeDir(resolve(), resolve(to));

/** 创建指定路径文件夹 */
export const createDir = (dest: string, building?: any) => {
	const log = building?.success?.bind(building) ?? console.log.bind(console);
	return new Promise((resolve, reject) => {
		if (fs.existsSync(dest)) return resolve(true);

		fs.mkdir(dest, (error) => {
			if (error) return reject(error);

			log(`目录：${dest} 创建成功！`);

			return resolve(true);
		});
	});
};

/** 将生成的代码写入指定路径文件中 */
export const writeFile = (dest: string, code: string, building?: any) =>
	new Promise((resolve, reject) => {
		createDir(dest.substring(0, dest.replace(/\//g, '\\').lastIndexOf('\\')), building)
			.then(() => {
				fs.writeFile(dest, code, { encoding: 'utf-8' }, (error) => {
					if (error) return reject(error);

					const log = building?.success?.bind(building) ?? console.log.bind(console);

					log(`文件写入路径：${relative(dest)} 文件大小：${getSize(code)}`);

					return resolve(true);
				});
			})
			.catch(reject);
	});

/** 删除文件夹及其所有子文件 */
export const delDir = (dest: string, includeSelf = true, building?: any) => {
	const log = building?.info?.bind(building) ?? console.log.bind(console);

	log(`开始删除目录 ${dest}！`);

	if (!fs.existsSync(dest)) {
		log(`目录 ${dest} 不存在！`);
		return;
	}

	fs.readdirSync(dest).forEach((file) => {
		const curPath = join(dest, file);
		if (fs.statSync(curPath).isDirectory()) {
			/* 递归删除文件夹 */
			delDir(curPath, true, building);
		} else {
			/* 删除文件 */
			fs.unlinkSync(curPath);
		}
	});

	/* 删除文件夹自身 */
	includeSelf && fs.rmdirSync(dest);
};

/** 获取库名 */
export const getLibName = () => bigCamelCase(pkgName);
