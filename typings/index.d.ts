///<reference types="lodash"/>
///<reference types="node"/>
/// <reference types="node" />
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
 * 校验邮箱
 * @description 依赖于 async-validator 校验
 *
 * @param message 失败消息
 * @param trigger 触发条件
 *
 * @default message 邮箱格式不正确
 * @default trigger blur
 */
export const checkEmail: (message?: string, trigger?: RuleTrigger) => {
    type: string;
    message: string;
    trigger: RuleTrigger;
};

/**
 * 校验字符或数组长度
 * @description 依赖于 async-validator 校验
 *
 * @param min 最小值
 * @param max 最大值
 * @param message 失败消息
 * @param type 数据类型，值为其他类型时需填入对应类型关键词
 * @param trigger 触发条件
 *
 * @default min 1
 * @default max 20
 * @default message 输入内容长度为 [min] ~ [max]
 * @default type string
 * @default trigger change
 */
export const checkLen: (min?: number, max?: number, message?: string, type?: string, trigger?: RuleTrigger) => {
    type: string;
    min: number;
    max: number;
    message: string;
    trigger: RuleTrigger;
};

/**
 * 校验手机号
 * @description 依赖于 async-validator 校验
 *
 * @param message 失败消息
 * @param trigger 触发条件
 *
 * @default message 手机号格式不正确
 * @default trigger blur
 */
export const checkPhone: (message?: string, trigger?: RuleTrigger) => {
    pattern: RegExp;
    message: string;
    trigger: RuleTrigger;
};

/**
 * 校验必填
 * @description 依赖于 async-validator 校验必填
 *
 * @param message 失败消息
 * @param type 数据类型，值为其他类型时需填入对应类型关键词
 * @param trigger 触发条件
 *
 * @default message 当前项为必填信息
 * @default type string
 * @default trigger blur
 */
export const checkRequired: (message?: string, type?: string, trigger?: RuleTrigger) => {
    type: string;
    required: boolean;
    message: string;
    trigger: RuleTrigger;
};

/**
 * 校验字母、数字、下划线
 * @description 依赖于 async-validator 校验
 *
 * @param message 失败消息
 * @param trigger 触发条件
 *
 * @default message 输入格式仅支持字母、数字、_
 * @default trigger blur
 */
export const checkWord: (message?: string, trigger?: RuleTrigger) => {
    type: string;
    pattern: RegExp;
    message: string;
    trigger: RuleTrigger;
};
export { clamp }
export { cloneDeep }

/**
 * rgb 转 16 进制
 * @description rgb(0,0,0) --> #000
 *
 * @param color rgb 颜色
 */
export const colorHex: (color: string) => string;

/**
 * 16 进制转 rgb
 * @description #000 --> rgb(0, 0, 0)
 *
 * @param color 16 进制颜色
 */
export const colorRgb: (color: string) => string;
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
 * " " | null | undefined | Object.keys(target).length === 0 会返回 true，
 * map | set | weakMap | weakSet 判断 size === 0 时返回 true
 *
 * @param target 目标对象
 */
export const isEmpty: (target: any) => any;
export { isEqual }
export { isEqualWith }
export { kebabCase }

/** LOG 日志 */
export const log: {
    /**
     * 打印一个 [ title | text ] 样式的信息
     * @param title 标题
     * @param info 信息
     * @param type 样式
     */
    capsule(title: string, info: any, type?: "error" | "default" | "primary" | "success" | "warning" | "text" | undefined): void;
    /**
     * 打印彩色文字
     * @param infoArr 信息数组
     */
    colorful(infoArr: {
        info: string;
        type?: LogColor;
    }[]): void;
    /**
     * 打印普通信息
     * @param infos 信息集合
     */
    info(...infos: string[]): void;
    /**
     * 打印主色信息
     * @param infos 信息集合
     */
    primary(...infos: string[]): void;
    /**
     * 打印成功色信息
     * @param infos 信息集合
     */
    success(...infos: string[]): void;
    /**
     * 打印警告色信息
     * @param infos 信息集合
     */
    warning(...infos: string[]): void;
    /**
     * 打印错误色信息
     * @param infos 信息集合
     */
    error(...infos: string[]): void;
};

/** 日志颜色样式 */
type LogColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'text';
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

/** 类型检查 */
export const type: {
    /** 字符串类型 */
    isString: (target: any) => target is string;
    /** 数字类型 */
    isNumber: (target: any) => target is number;
    /** 布尔类型 */
    isBoolean: (target: any) => target is boolean;
    /** 对象类型 */
    isObject: (target: any) => target is object;
    /** 数组类型 */
    isArray: (target: any) => target is any[];
    /** ArrayBuffer */
    isArrayBuffer: (target: any) => target is ArrayBuffer;
    /** 表单数据类型 */
    isFormData: (target: any) => target is FormData;
    /** 日期类型 */
    isDate: (target: any) => target is Date;
    /** Null */
    isNull: (target: any) => target is null;
    /** Undefined */
    isUndefined: (target: any) => target is undefined;
    /** Map */
    isMap: (target: any) => target is Map<any, any>;
    /** Set */
    isSet: (target: any) => target is Set<any>;
    /** WeakMap */
    isWeakMap: (target: any) => target is WeakMap<any, any>;
    /** WeakSet */
    isWeakSet: (target: any) => target is WeakSet<any>;
    /** 函数类型 */
    isFunction: (target: any) => target is Function;
    /** Dom 元素类型 */
    isElement: (target: any) => target is Element;
    /** Buffer */
    isBuffer: (target: any) => target is Buffer;
    /** Error */
    isError: (target: any) => target is Error;
    /** 正则类型 */
    isRegExp: (target: any) => target is RegExp;
    /** Symbol */
    isSymbol: (target: any) => target is Symbol;
    /**
     * 空值类型
     * @description null | undefined
     */
    isNullish: (target: any) => target is Nullish;
    /**
     * 基础类型
     * @description string | number | boolean | null | undefined
     */
    isBasicType: (target: any) => target is BasicType;
};
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