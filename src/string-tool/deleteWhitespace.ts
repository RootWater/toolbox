import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * 删除空白符
 * @param str 目标字符串
 */
const deleteWhitespace = (str: string) => defaultIfEmpty(str).replace(/(\s|\r)+/g, '');

export default deleteWhitespace;
