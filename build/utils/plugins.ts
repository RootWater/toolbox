import { eslint } from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { terser } from 'rollup-plugin-terser';
import { resolve as resolveDir } from './util';
import { Plugin } from 'rollup';

const defaultPlugins = () => [
	eslint({
		/* lint 结果错误将会抛出异常 */
		throwOnError: true,

		/* lint 结果为警告禁止抛出异常 */
		throwOnWarning: false,

		/* 包含文件 */
		include: [resolveDir('src/**/*.ts')],

		/* 排除文件 */
		exclude: [
			resolveDir('node_modules/**'),
			resolveDir('build/**'),
			resolveDir('scripts/**'),
			resolveDir('lib/**'),
			resolveDir('es5/**')
		]
	}),

	/* 支持 json 文件导入 */
	json(),

	/* 支持解析 node_modules 下的插件 */
	resolve({ customResolveOptions: { moduleDirectory: 'node_modules' }, browser: true }),

	/* commonjs 模块转换 */
	cjs({ sourceMap: false }),

	/* 根据根目录下的 tsconfig.json 文件解析 typescript */
	typescript({ tsconfig: resolveDir('tsconfig.prod.json') }),

	/* 用于转换 es 新语法 */
	babel({
		babelrc: false,
		presets: [
			[
				'@babel/env',
				{
					modules: false,
					useBuiltIns: 'usage',
					targets: { browsers: 'ie >= 10', node: 8 },
					corejs: 3
				}
			]
		],
		plugins: ['@babel/plugin-external-helpers'],
		externalHelpers: true,
		runtimeHelpers: false,
		extensions: [...DEFAULT_EXTENSIONS, '.ts'],
		include: [resolveDir('src/**')],
		exclude: resolveDir('node_modules/**')
	})
];

/**
 * 获取插件集合
 * @param useMin 是否启用代码压缩插件
 *
 * @default useMin false
 */
const getPlugins = (useMin = false): Plugin[] => {
	const plugins = defaultPlugins();
	/* 启用代码压缩 */
	useMin && plugins.push(terser());
	return plugins;
};

export default getPlugins;
