import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * 反转字母大小写
 * @param str 目标字符串
 */
const swapCase = (str: string) =>
	defaultIfEmpty(str).replace(/[a-z]/gi, (c) =>
		c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase()
	);

export default swapCase;
