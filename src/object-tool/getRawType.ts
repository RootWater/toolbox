/**
 * 获取目标对象真实类型
 * @param target 目标对象
 */
const getRawType = (target: any) =>
	Object.prototype.toString.call(target).slice(8, -1).toLowerCase();

export default getRawType;
