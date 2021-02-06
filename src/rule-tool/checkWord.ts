import { RuleTrigger } from '../../typings/typed';

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
const checkWord = (message = '输入格式仅支持字母、数字、_', trigger: RuleTrigger = 'blur') => ({
	type: 'string',
	pattern: /^\w+$/g,
	message,
	trigger
});

export default checkWord;
