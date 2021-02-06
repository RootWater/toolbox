import isEqual from '../lodash-tool/isEqual';
import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * 字符串对比忽略大小写
 * @param str1 字符串 1
 * @param str2 字符串 2
 */
const strEqualIgnoreCase = (str1: string, str2: string) =>
	isEqual(defaultIfEmpty(str1).toLowerCase(), defaultIfEmpty(str2).toLowerCase());

export default strEqualIgnoreCase;
