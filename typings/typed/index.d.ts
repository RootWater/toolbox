/** 空值类型 */
declare type Nullish = null | undefined;

/** 基础类型 */
declare type BasicType = string | number | boolean | Nullish;

/** 规则触发条件 */
declare type RuleTrigger = 'blur' | 'change';
