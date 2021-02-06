import getRawType from './getRawType';

/** 类型检查 */
const TYPE = {
	/** 字符串类型 */
	isString: (target: any): target is string => getRawType(target) === 'string',

	/** 数字类型 */
	isNumber: (target: any): target is number => getRawType(target) === 'number',

	/** 布尔类型 */
	isBoolean: (target: any): target is boolean => getRawType(target) === 'boolean',

	/** 对象类型 */
	isObject: (target: any): target is object => getRawType(target) === 'object',

	/** 数组类型 */
	isArray: (target: any): target is Array<any> => getRawType(target) === 'array',

	/** ArrayBuffer */
	isArrayBuffer: (target: any): target is ArrayBuffer => getRawType(target) === 'arraybuffer',

	/** 表单数据类型 */
	isFormData: (target: any): target is FormData => getRawType(target) === 'formdata',

	/** 日期类型 */
	isDate: (target: any): target is Date => getRawType(target) === 'date',

	/** Null */
	isNull: (target: any): target is null => getRawType(target) === 'null',

	/** Undefined */
	isUndefined: (target: any): target is undefined => getRawType(target) === 'undefined',

	/** Map */
	isMap: (target: any): target is Map<any, any> => getRawType(target) === 'map',

	/** Set */
	isSet: (target: any): target is Set<any> => getRawType(target) === 'set',

	/** WeakMap */
	isWeakMap: (target: any): target is WeakMap<any, any> => getRawType(target) === 'weakmap',

	/** WeakSet */
	isWeakSet: (target: any): target is WeakSet<any> => getRawType(target) === 'weakset',

	/** 函数类型 */
	isFunction: (target: any): target is Function => getRawType(target) === 'function',

	/** Dom 元素类型 */
	isElement: (target: any): target is Element => getRawType(target) === 'element',

	/** Buffer */
	isBuffer: (target: any): target is Buffer => getRawType(target) === 'buffer',

	/** Error */
	isError: (target: any): target is Error => getRawType(target) === 'error',

	/** 正则类型 */
	isRegExp: (target: any): target is RegExp => getRawType(target) === 'regexp',

	/** Symbol */
	isSymbol: (target: any): target is Symbol => getRawType(target) === 'symbol',

	/**
	 * 空值类型
	 * @description null | undefined
	 */
	isNullish: (target: any): target is Nullish => /(null|undefined)/i.test(getRawType(target)),

	/**
	 * 基础类型
	 * @description string | number | boolean | null | undefined
	 */
	isBasicType: (target: any): target is BasicType =>
		/(string|number|boolean|null|undefined)/i.test(getRawType(target))
};

export default TYPE;
