import { RuleTrigger } from '../../typings/typed';

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
const checkPhone = (message = '手机号格式不正确', trigger: RuleTrigger = 'blur') => ({
	pattern: /^1[3456789]\d{9}$/,
	message,
	trigger
});

export default checkPhone;
