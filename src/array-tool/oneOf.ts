/**
 * 待检值是否存在于检测数组中
 * @param target 待检值
 * @param targetArr 检测数组
 *
 * @default targetArr []
 *
 * @example
 * oneOf('a', ['a', 'b', 'c'])
 */
const oneOf = (target: BasicType, targetArr?: BasicType[]) => (targetArr ?? []).includes(target);

export default oneOf;
