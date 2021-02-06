import TYPE from '../object-tool/TYPE';

/** 日志颜色样式 */
export type LogColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'text';

/**
 * 返回当前样式的颜色值
 * @param type 颜色样式
 *
 * @default type default
 */
function typeColor(type?: LogColor): string {
	let color = '';
	switch (type) {
		case 'primary':
			color = '#409EFF';
			break;
		case 'success':
			color = '#67C23A';
			break;
		case 'warning':
			color = '#E6A23C';
			break;
		case 'error':
			color = '#F56C6C';
			break;
		case 'default':
		default:
			color = '#303133';
			break;
	}
	return color;
}

/** LOG 日志 */
const LOG = {
	/**
	 * 打印一个 [ title | text ] 样式的信息
	 * @param title 标题
	 * @param info 信息
	 * @param type 样式
	 */
	capsule(title: string, info: any, type?: LogColor) {
		type = type ?? 'primary';
		const color = typeColor(type);

		console.log(
			`%c ${title} %c ${TYPE.isBasicType(info) ? info : JSON.stringify(info)} %c`,
			'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
			`background:${color}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
			'background:transparent'
		);
	},

	/**
	 * 打印彩色文字
	 * @param infoArr 信息数组
	 */
	colorful(infoArr: { info: string; type?: LogColor }[]) {
		console.log(
			`%c${infoArr.map((t) => t.info ?? '').join('%c')}`,
			...infoArr.map((t) => `color: ${typeColor(t.type)};`)
		);
	},

	/**
	 * 打印普通信息
	 * @param infos 信息集合
	 */
	info(...infos: string[]) {
		LOG.colorful(infos.map((info) => ({ info })));
	},

	/**
	 * 打印主色信息
	 * @param infos 信息集合
	 */
	primary(...infos: string[]) {
		LOG.colorful(infos.map((info) => ({ info, type: 'primary' })));
	},

	/**
	 * 打印成功色信息
	 * @param infos 信息集合
	 */
	success(...infos: string[]) {
		LOG.colorful(infos.map((info) => ({ info, type: 'success' })));
	},

	/**
	 * 打印警告色信息
	 * @param infos 信息集合
	 */
	warning(...infos: string[]) {
		LOG.colorful(infos.map((info) => ({ info, type: 'warning' })));
	},

	/**
	 * 打印错误色信息
	 * @param infos 信息集合
	 */
	error(...infos: string[]) {
		LOG.colorful(infos.map((info) => ({ info, type: 'error' })));
	}
};

export default LOG;
