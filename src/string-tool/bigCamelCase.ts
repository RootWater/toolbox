import camelCase from '../lodash-tool/camelCase';
import upperFirst from '../lodash-tool/upperFirst';
import defaultIfEmpty from '../object-tool/defaultIfEmpty';

/**
 * 大驼峰转换
 * @param str 目标字符串
 */
const bigCamelCase = (str?: string) => upperFirst(camelCase(defaultIfEmpty(str)));

export default bigCamelCase;
