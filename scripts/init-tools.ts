import fs from 'fs';
import { resolveSrc as resolve } from '../build/utils/util';
import _ from 'lodash';
import Ora from '../build/utils/ora';

const suffix = '.ts';
const suffixReg = /\.ts$/;
const building = new Ora();

const getToolDirs = () => {
	const toolDirs = fs
		.readdirSync(resolve())
		.filter((dir) => fs.statSync(resolve(dir)).isDirectory());

	if (!toolDirs.length) {
		building.rawWarn('未检测到文件，请检查 src 文件夹！');
		return [];
	}

	return toolDirs;
};

const getToolFiles = (dirs: string[]) => {
	const toolFiles = dirs.map((path) =>
		fs
			.readdirSync(resolve(path))
			.filter((dir) => suffixReg.test(dir))
			.map((file) => ({
				name: _.camelCase(file.replace(suffixReg, '')),
				path: `./${path}/${file.replace(suffixReg, '')}`
			}))
	);
	const files = _.flattenDeep(toolFiles);
	const fileCount = files
		.map((file) => file.name)
		.reduce((prev, curv) => ((prev[curv] ??= 0), ++prev[curv], prev), {});

	if (!files.length) {
		building.rawWarn('未检测到文件，请检查 src 文件夹！');
	}

	if (Object.values(fileCount).includes(2)) {
		const repeatFiles = Object.keys(fileCount)
			.filter((file) => fileCount[file] > 1)
			.map((file) => file + suffix)
			.join('、');

		throw Error(`文件 ${repeatFiles} 重名，请检查！`);
	}

	return files;
};

const writeFile = (files: any[]) => {
	const WRITE_FILE_OPTIONS: fs.WriteFileOptions = { encoding: 'utf-8' };
	const importContent = files.map((f: any) => `import ${f.name} from '${f.path}';`).join('\n');
	const exportContent = `export { ${files.map((f: any) => f.name).join(', ')} };`;
	const exportDefaultContent = `export default { ${files.map((f: any) => f.name).join(', ')} };`;

	const writeContent = `${importContent}\n${exportContent}\n${exportDefaultContent}`;

	fs.writeFileSync(resolve('index.ts'), writeContent, WRITE_FILE_OPTIONS);

	building.success(`入口文件写入完成，路径：${resolve('index.ts')}`);
};

const start = () => {
	building.start();
	building.info(`Init tools start...`);

	try {
		const toolDirs = getToolDirs();
		const toolFiles = getToolFiles(toolDirs);

		if (!toolFiles.length) {
			return;
		}

		writeFile(toolFiles);

		building.success(`Init tools done!`);
	} catch (error) {
		building.rawError(error.message);
	}

	building.stop();
};

start();
