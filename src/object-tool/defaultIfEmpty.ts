import isEmpty from './isEmpty';

/**
 * 如果目标对象为空时返回默认值
 * @param target 目标对象
 * @param defaultVal 默认值
 *
 * @default defaultVal ''
 */
const defaultIfEmpty = <T>(target: T, defaultVal?: any): T =>
	isEmpty(target) ? defaultVal ?? '' : target;

export default defaultIfEmpty;
