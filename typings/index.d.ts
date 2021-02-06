///<reference types="lodash"/>
import assign from 'lodash/assign';
import assignWith from 'lodash/assignWith';
import at from 'lodash/at';
import camelCase from 'lodash/camelCase';
import capitalize from 'lodash/capitalize';
import castArray from 'lodash/castArray';
import clamp from 'lodash/clamp';
import cloneDeep from 'lodash/cloneDeep';
import compact from 'lodash/compact';
import debounce from 'lodash/debounce';
import deburr from 'lodash/deburr';
import defaults from 'lodash/defaults';
import defaultsDeep from 'lodash/defaultsDeep';
import delay from 'lodash/delay';
import difference from 'lodash/difference';
import differenceBy from 'lodash/differenceBy';
import differenceWith from 'lodash/differenceWith';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import findKey from 'lodash/findKey';
import findLastIndex from 'lodash/findLastIndex';
import findLastKey from 'lodash/findLastKey';
import flattenDepth from 'lodash/flattenDepth';
import fromEntries from 'lodash/fromPairs';
import get from 'lodash/get';
import has from 'lodash/has';
import hasIn from 'lodash/hasIn';
import initial from 'lodash/initial';
import inRange from 'lodash/inRange';
import intersection from 'lodash/intersection';
import intersectionBy from 'lodash/intersectionBy';
import intersectionWith from 'lodash/intersectionWith';
import isEqual from 'lodash/isEqual';
import isEqualWith from 'lodash/isEqualWith';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';
import lowerFirst from 'lodash/lowerFirst';
import maxBy from 'lodash/maxBy';
import meanBy from 'lodash/meanBy';
import merge from 'lodash/merge';
import mergeWith from 'lodash/mergeWith';
import minBy from 'lodash/minBy';
import nth from 'lodash/nth';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';
import once from 'lodash/once';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import pull from 'lodash/pull';
import pullAll from 'lodash/pullAll';
import pullAllBy from 'lodash/pullAllBy';
import pullAllWith from 'lodash/pullAllWith';
import random from 'lodash/random';
import range from 'lodash/range';
import rangeRight from 'lodash/rangeRight';
import reject from 'lodash/reject';
import remove from 'lodash/remove';
import sample from 'lodash/sample';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';
import sortedUniq from 'lodash/sortedUniq';
import sortedUniqBy from 'lodash/sortedUniqBy';
import throttle from 'lodash/throttle';
import toPath from 'lodash/toPath';
import truncate from 'lodash/truncate';
import union from 'lodash/union';
import unionBy from 'lodash/unionBy';
import unionWith from 'lodash/unionWith';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import uniqueId from 'lodash/uniqueId';
import uniqWith from 'lodash/uniqWith';
import upperCase from 'lodash/upperCase';
import upperFirst from 'lodash/upperFirst';
import words from 'lodash/words';
declare namespace HLToolbox {
export { assign }
export { assignWith }
export { at }

/**
 * base64 解密
 * @param str 目标字符串
 */
export const base64Decode: (str: string) => string;

/**
 * base64 加密
 * @param str 目标字符串
 */
export const base64Encode: (str: string) => string;

/**
 * 大驼峰转换
 * @param str 目标字符串
 */
export const bigCamelCase: (str?: string | undefined) => string;
export { camelCase }
export { capitalize }
export { castArray }

/**
 * 检查目标对象类型
 * @param target 目标对象
 */
export const checkType: (target: any) => {
    /**
     * 验证类型是否一致
     * @param t 校验类型
     *
     * @example
     * checkType(target).validType('valid')
     */
    validType: (t: string) => boolean;
    /**
     * 自定义验证
     * @param cb 回调函数
     *
     * @example
     * checkType(target).customValid((type) => type === 'custom')
     */
    customValid: (cb: (t: string) => boolean) => boolean;
    /** 字符串 */
    isString: boolean;
    /** 数字 */
    isNumber: boolean;
    /** 布尔 */
    isBoolean: boolean;
    /** 对象 */
    isObject: boolean;
    /** 数组 */
    isArray: boolean;
    /** ArrayBuffer */
    isArrayBuffer: boolean;
    /** FormData */
    isFormData: boolean;
    /** 日期 */
    isDate: boolean;
    /** Null */
    isNull: boolean;
    /** Undefined */
    isUndefined: boolean;
    /** Map */
    isMap: boolean;
    /** Set */
    isSet: boolean;
    /** WeakMap */
    isWeakMap: boolean;
    /** WeakSet */
    isWeakSet: boolean;
    /** 函数 */
    isFunction: boolean;
    /** arguments */
    isArguments: boolean;
    /** dom 元素 */
    isElement: boolean;
    /** Buffer */
    isBuffer: boolean;
    /** Error */
    isError: boolean;
    /**正则 */
    isRegExp: boolean;
    /** Symbol */
    isSymbol: boolean;
    /**
     * 空值
     * @description null | undefined
     */
    isNullish: boolean;
    /**
     * 基础类型
     * @description string | number | boolean | null | undefined
     */
    isBasics: boolean;
    /** Infinity */
    isFinite: boolean;
    /** 安全数字 */
    isSafeInteger: boolean;
};
export { clamp }
export { cloneDeep }
export { compact }

/**
 * 统计目标字符串中子串出现的次数
 * @param str 目标字符串
 * @param sub 搜索字符
 */
export const countMatches: (str: string, sub: string) => number;
export { debounce }
export { deburr }

/**
 * 如果目标对象为空时返回默认值
 * @param target 目标对象
 * @param defaultVal 默认值
 *
 * @default defaultVal ''
 */
export const defaultIfEmpty: <T>(target: T, defaultVal?: any) => T;
export { defaults }
export { defaultsDeep }
export { delay }

/**
 * 删除空白符
 * @param str 目标字符串
 */
export const deleteWhitespace: (str: string) => string;
export { difference }
export { differenceBy }
export { differenceWith }
export { filter }
export { findIndex }
export { findKey }
export { findLastIndex }
export { findLastKey }
export { flattenDepth }
export { fromEntries }
export { get }

/**
 * 获取目标对象真实类型
 * @param target 目标对象
 */
export const getRawType: (target: any) => string;
export { has }
export { hasIn }
export { initial }
export { inRange }
export { intersection }
export { intersectionBy }
export { intersectionWith }

/**
 * 是否为空
 * @description
 * "" | null | undefined | Object.keys(target).length === 0 会返回 true，
 * map | set | weakMap | weakSet 判断 size === 0 时返回 true
 *
 * @param target 目标对象
 */
export const isEmpty: (target: any) => any;
export { isEqual }
export { isEqualWith }
export { kebabCase }
export { lowerCase }
export { lowerFirst }
export { maxBy }
export { meanBy }
export { merge }
export { mergeWith }
export { minBy }
export { nth }

/**
 * Object 转为 FormData
 * @param obj 对象
 * @param ignoreKeys 忽略的 key 集合
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const formData = obj2FormData(obj, 'b');
 */
export const obj2FormData: (obj: Object, ...ignoreKeys: string[]) => FormData;
export { omit }
export { omitBy }
export { once }

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
export const oneOf: (target: BasicType, targetArr?: BasicType[] | undefined) => boolean;
export { orderBy }
export { pick }
export { pickBy }
export { pull }
export { pullAll }
export { pullAllBy }
export { pullAllWith }
export { random }
export { range }
export { rangeRight }
export { reject }
export { remove }
export { sample }
export { sampleSize }
export { shuffle }
export { sortedUniq }
export { sortedUniqBy }

/**
 * 字符串对比忽略大小写
 * @param str1 字符串 1
 * @param str2 字符串 2
 */
export const strEqualIgnoreCase: (str1: string, str2: string) => boolean;

/**
 * 反转字母大小写
 * @param str 目标字符串
 */
export const swapCase: (str: string) => string;
export { throttle }
export { toPath }
export { truncate }
export { union }
export { unionBy }
export { unionWith }
export { uniq }
export { uniqBy }
export { uniqueId }
export { uniqWith }
export { upperCase }
export { upperFirst }
export { words }

export { }

}
export = HLToolbox