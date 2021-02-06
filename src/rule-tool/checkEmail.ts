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
const checkEmail = (message = '邮箱格式不正确', trigger: RuleTrigger = 'blur') => ({
	type: 'email',
	message,
	trigger
});

export default checkEmail;
