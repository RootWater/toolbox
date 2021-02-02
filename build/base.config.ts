import { getExternal, getLibName, resolve } from './utils/util';
import { name as pkgName, version, author, description } from '../package.json';
import { RollupOptions } from 'rollup';
import dayjs from 'dayjs';

/** 获取基础配置项 */
const createBaseConfig = (): RollupOptions => ({
	/* 入口文件 */
	input: resolve('src/index.ts'),

	/* 输出配置 */
	output: {
		/* 库名，作为 script 导入的默认名称 */
		name: getLibName(),

		/* 模块格式类型 */
		format: 'umd',

		/* 生成的文件 */
		file: resolve('lib/index.js'),

		/* 关闭 sourcemap */
		sourcemap: false,

		/* 文件头信息 */
		banner:
			`/*!\n` +
			` * Name: ${pkgName}\n` +
			` * Version: v${version}\n` +
			` * Author: ${author}\n` +
			` * Description: ${description}\n` +
			` * Date: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}\n` +
			' */',

		exports: 'named'
	},

	/* 启用插件集合 */
	plugins: [],

	/* 排除 node_modules 中需要打包的插件集合 */
	external: getExternal()
});

export default createBaseConfig;
