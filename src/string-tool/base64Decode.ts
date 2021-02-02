import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * base64 解密
 * @param str 目标字符串
 */
const base64Decode = (str: string) => decodeURIComponent(escape(atob(defaultIfEmpty(str))));

export default base64Decode;
