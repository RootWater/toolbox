import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * base64 加密
 * @param str 目标字符串
 */
const base64Encode = (str: string) => btoa(unescape(encodeURIComponent(defaultIfEmpty(str))));

export default base64Encode;
