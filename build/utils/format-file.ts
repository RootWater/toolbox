import { FormatFileType, ModuleFormatType } from '../typings/util';
import { resolve } from './util';

/* 不同格式下输出不同的文件 */
const FORMAT_FILE: FormatFileType = {
	/* 通用格式 */
	umd: 'lib/toolbox.js',

	/* UMD 压缩 */
	min: 'lib/toolbox.min.js',

	/* ESModule */
	es: 'lib/toolbox.esm.js',
	esm: 'lib/toolbox.esm.js',

	/* Commonjs */
	commonjs: 'lib/toolbox.cjs.js',
	cjs: 'lib/toolbox.cjs.js',

	/* AMD */
	amd: 'lib/toolbox.amd.js',

	/* System */
	system: 'lib/toolbox.sys.js',
	systemjs: 'lib/toolbox.sys.js',

	/* Module */
	module: 'lib/toolbox.module.js',

	/* IIFE */
	iife: 'lib/toolbox.iife.js'
};

/**
 * 获取对应模块类型的输出文件路径
 * @param format 模块类型
 *
 * @default format 'umd'
 */
const getOutputFile = (format?: ModuleFormatType) => {
	format ??= 'umd';
	return resolve(FORMAT_FILE[format]);
};

export default getOutputFile;
