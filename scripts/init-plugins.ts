import { delDir, resolveSrc, writeFile } from '../build/utils/util';
import Ora from '../build/utils/ora';

const building = new Ora();

/** 获取插件内容 */
const getPluginContent = (name: string, plugin: { name: string; path: string }) =>
	`import ${plugin.name} from '${name}/${plugin.path}';` +
	`\n` +
	`export default ${plugin.name};`;

/** 写入插件文件 */
const writePluginFiles = async (name: string, plugins: any[]) => {
	building.info(`开始写入 ${name} 下的工具函数！`);

	plugins = plugins.map((p) => (typeof p === 'string' ? { name: p, path: p } : p));

	for (const plugin of plugins) {
		const path = resolveSrc(`${name}-tool`, `${plugin.name}.ts`);
		await writeFile(path, getPluginContent(name, plugin), building);
	}

	building.success(`写入 ${name} 完成`);
};

/** 需要写入的插件 */
const PLUGIN = {
	lodash: require('./plugins/lodash')
};

/** 启动函数 */
const start = () => {
	building.start();
	building.info('Init plugins start...');

	try {
		Object.keys(PLUGIN).forEach((plugin) => {
			delDir(resolveSrc(`${plugin}-tool`), false, building);
			writePluginFiles(plugin, PLUGIN[plugin]);
		});

		building.success(`Init plugins done!`);
	} catch (error) {
		building.rawError(error.message);
	}

	building.stop();
};

start();
