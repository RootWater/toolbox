import checkType from './checkType';

/**
 * 是否为空
 * @description
 * "" | null | undefined | Object.keys(target).length === 0 会返回 true，
 * map | set | weakMap | weakSet 判断 size === 0 时返回 true
 *
 * @param target 目标对象
 */
const isEmpty = (target: any) => {
	const type = checkType(target);

	if (type.isNullish) return true;
	if (type.isString) return !target.trim();
	if (['isMap', 'isSet', 'isWeakMap', 'isWeakSet'].some((item) => type[item])) return target.size;

	return !Object.keys(target).length;
};

export default isEmpty;
