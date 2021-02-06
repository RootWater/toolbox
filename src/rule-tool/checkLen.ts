import { RuleTrigger } from '../../typings/typed';

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
const checkLen = (
	min = 1,
	max = 20,
	message = `输入内容长度为 ${min} ~ ${max}`,
	type = 'string',
	trigger: RuleTrigger = 'change'
) => ({
	type,
	min,
	max,
	message,
	trigger
});

export default checkLen;
