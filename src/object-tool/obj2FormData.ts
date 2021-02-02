/**
 * Object 转为 FormData
 * @param obj 对象
 * @param ignoreKeys 忽略的 key 集合
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const formData = obj2FormData(obj, 'b');
 */
const obj2FormData = (obj: Object, ...ignoreKeys: string[]) => {
	const formData = new FormData();
	for (const key in obj) {
		if (Reflect.has(obj, key) && !ignoreKeys.includes(key)) {
			formData.append(key, obj[key]);
		}
	}
	return formData;
};

export default obj2FormData;
