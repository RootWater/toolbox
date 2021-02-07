import TYPE from './TYPE';

/**
 * 是否为空
 * @description
 * " " | null | undefined | Object.keys(target).length === 0 会返回 true，
 * map | set | weakMap | weakSet 判断 size === 0 时返回 true
 *
 * @param target 目标对象
 */
const isEmpty = (target: any): target is Nullish => {
	if (TYPE.isNullish(target)) return true;
	if (TYPE.isString(target)) return !target.trim().length;
	if (['isMap', 'isSet', 'isWeakMap', 'isWeakSet'].some((key) => TYPE?.[key](target)))
		return target.size > 0;

	return !Object.keys(target).length;
};

export default isEmpty;
