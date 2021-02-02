import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * 统计目标字符串中子串出现的次数
 * @param str 目标字符串
 * @param sub 搜索字符
 */
const countMatches = (str: string, sub: string) => defaultIfEmpty(str).split(sub).length - 1;

export default countMatches;
