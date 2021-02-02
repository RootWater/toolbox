import getRawType from './getRawType';
import strEqualIgnoreCase from '../string-tool/strEqualIgnoreCase';

/**
 * 检查目标对象类型
 * @param target 目标对象
 */
const checkType = (target: any) => {
	const type = getRawType(target);
	const typeValid = {
		/**
		 * 验证类型是否一致
		 * @param t 校验类型
		 *
		 * @example
		 * checkType(target).validType('valid')
		 */
		validType: (t: string) => strEqualIgnoreCase(type, t),

		/**
		 * 自定义验证
		 * @param cb 回调函数
		 *
		 * @example
		 * checkType(target).customValid((type) => type === 'custom')
		 */
		customValid: (cb: (t: string) => boolean) => cb?.(type),

		/** 字符串 */
		isString: strEqualIgnoreCase(type, 'string'),

		/** 数字 */
		isNumber: strEqualIgnoreCase(type, 'number'),

		/** 布尔 */
		isBoolean: strEqualIgnoreCase(type, 'boolean'),

		/** 对象 */
		isObject: strEqualIgnoreCase(type, 'object'),

		/** 数组 */
		isArray: strEqualIgnoreCase(type, 'array'),

		/** ArrayBuffer */
		isArrayBuffer: strEqualIgnoreCase(type, 'arrayBuffer'),

		/** FormData */
		isFormData: strEqualIgnoreCase(type, 'formData'),

		/** 日期 */
		isDate: strEqualIgnoreCase(type, 'date'),

		/** Null */
		isNull: strEqualIgnoreCase(type, 'null'),

		/** Undefined */
		isUndefined: strEqualIgnoreCase(type, 'undefined'),

		/** Map */
		isMap: strEqualIgnoreCase(type, 'map'),

		/** Set */
		isSet: strEqualIgnoreCase(type, 'set'),

		/** WeakMap */
		isWeakMap: strEqualIgnoreCase(type, 'weakMap'),

		/** WeakSet */
		isWeakSet: strEqualIgnoreCase(type, 'weakSet'),

		/** 函数 */
		isFunction: strEqualIgnoreCase(type, 'function'),

		/** arguments */
		isArguments: strEqualIgnoreCase(type, 'arguments'),

		/** dom 元素 */
		isElement: strEqualIgnoreCase(type, 'element'),

		/** Buffer */
		isBuffer: strEqualIgnoreCase(type, 'buffer'),

		/** Error */
		isError: strEqualIgnoreCase(type, 'error'),

		/**正则 */
		isRegExp: strEqualIgnoreCase(type, 'regExp'),

		/** Symbol */
		isSymbol: strEqualIgnoreCase(type, 'symbol'),

		/**
		 * 空值
		 * @description null | undefined
		 */
		isNullish: /(null|undefined)/i.test(type),

		/**
		 * 基础类型
		 * @description string | number | boolean | null | undefined
		 */
		isBasics: /(string|number|boolean|null|undefined)/i.test(type),

		/** Infinity */
		isFinite: Number.isFinite(target),

		/** 安全数字 */
		isSafeInteger: Number.isSafeInteger(target)
	};

	return typeValid;
};

export default checkType;
