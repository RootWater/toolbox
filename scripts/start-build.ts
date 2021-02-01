import createConfig from '../build/prod.config';
import { ModuleFormatType } from '../build/typings/util';
import Ora from '../build/utils/ora';
import { OutputOptions, rollup, RollupOptions } from 'rollup';
import { writeFile } from '../build/utils/util';

const building = new Ora();

/** 打包入口 */
const buildEntry = async (config: RollupOptions) => {
	const { format, file } = config.output as OutputOptions;
	const bundle = await rollup(config);
	const { code } = (await bundle.generate(config.output as OutputOptions)).output[0];

	building.info(`当前模块类型：${format}`);

	return writeFile(file!, code, building);
};

/** 启动函数 */
const start = async () => {
	building.start();
	building.info('Build start...');

	try {
		const target = process.env.TARGET ?? ['umd', 'min', 'esm', 'cjs'];

		for (const t of Array.isArray(target) ? target : [target.trim()]) {
			const rollupConfig = createConfig(t as ModuleFormatType, [
				'tslib',
				'axios',
				'@babel/polyfill'
			]);
			await buildEntry(rollupConfig);
		}

		building.success(`Build done!`);
	} catch (error) {
		building.rawError(error.message);
	}

	building.stop();
};

start();
