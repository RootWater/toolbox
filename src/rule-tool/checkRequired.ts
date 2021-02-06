import { RuleTrigger } from '../../typings/typed';

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
const checkRequired = (
	message = '当前项为必填信息',
	type = 'string',
	trigger: RuleTrigger = 'blur'
) => ({
	type,
	required: true,
	message,
	trigger
});

export default checkRequired;
