/**
 * 16 进制转 rgb
 * @description #000 --> rgb(0, 0, 0)
 *
 * @param color 16 进制颜色
 */
const colorRGB = (color: string) => {
	// 16 进制颜色值的正则
	const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

	if (!reg.test(color)) {
		return color;
	}

	// 如果只有三位的值，需变成六位，如：#fff => #ffffff
	if (color.length === 4) {
		let colorNew = '#';
		for (let i = 1; i < 4; i++) {
			colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
		}
		color = colorNew;
	}

	// 处理六位的颜色值，转为 rgb
	const colorArr: number[] = [];
	for (let i = 1; i < 7; i += 2) {
		colorArr.push(parseInt('0x' + color.slice(i, i + 2).toLowerCase()));
	}

	return 'rgb(' + colorArr.join(',') + ')';
};

export default colorRGB;
