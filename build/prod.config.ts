import { RollupOptions, ModuleFormat } from 'rollup';
import { ModuleFormatType } from './typings/util';
import { getExternal } from './utils/util';
import _ from 'lodash';
import getPlugins from './utils/plugins';
import getOutputFile from './utils/format-file';
import createBaseConfig from './base.config';

/**
 *  获取打包配置项
 * @param opts 配置项
 * @param externalIgnore 默认会排除打包所有生产环境插件，配置此处可将插件进行打包
 */
const createProdConfig = (
	opts?: ModuleFormatType | RollupOptions,
	externalIgnore?: string[]
): RollupOptions => {
	opts ??= 'umd';

	/* 参数校验 */
	if (_.isString(opts)) {
		// 是否压缩代码
		const isMin = /^min$/i.test(opts);
		opts = {
			output: {
				/* 压缩模式下使用 UMD 格式 */
				format: isMin ? 'umd' : (opts as ModuleFormat),

				/* 输出文件 */
				file: getOutputFile(opts)
			},

			/* 启用插件集合 */
			plugins: getPlugins(isMin),

			/* 排除打包的插件，这里排除所有生产环境插件，使用按需加载的方式导出 */
			external: getExternal(externalIgnore)
		};
	}

	return _.merge(createBaseConfig(), opts);
};

export default createProdConfig;
