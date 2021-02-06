import deleteWhitespace from '../string-tool/deleteWhitespace';

/**
 * rgb 转 16 进制
 * @description rgb(0,0,0) --> #000
 *
 * @param color rgb 颜色
 */
const colorHex = (color: string) => {
	// 先删除所有空格
	color = deleteWhitespace(color);
	// RGB 正则
	const reg = /^rgb\(((\d{1,3},){2,2})\d{1,3}\)$/i;

	if (!reg.test(color)) {
		return color;
	}

	// rgb(0,0,0) --> [0,0,0]，split 会分割出的数组会变成字符串数字 '0'，需要转成整数
	const [r, g, b] = color
		.replace(/(^rgb\(|\))/i, '')
		.split(',')
		.map((item) => parseInt(item));
	// 返回 hex 值
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export default colorHex;
