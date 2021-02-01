module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:jest/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'jest'],
	rules: {
		'no-debugger': 2,
		'generator-star-spacing': 0,
		indent: 0,
		'indent-legacy': [0, 2],
		'linebreak-style': [0, 'error', 'windows'],
		'no-fallthrough': 0,
		'no-constant-condition': ['error', { checkLoops: false }], // 设置此选项 false 允许循环中的常量表达式。
		'no-empty': ['error', { allowEmptyCatch: true }], // 允许空 catch 子句（即不包含注释）
		'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }], // 在函数左括号的前面是否有空格
		'eol-last': 0, // 不检测新文件末尾是否有空行
		semi: [0], // 必须在语句后面加分号
		quotes: 0, // ["error", "double"],// 字符串没有使用双引号
		'arrow-parens': 0,
		'no-new': 0, // 允许使用 new 关键字
		'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
		'comma-spacing': [1, { before: false, after: true }], // 逗号后有空格，前没有空格
		'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
		'key-spacing': [1, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
		'max-statements': [1, 100], // 单个函数最多 100 条语句
		'no-spaced-func': 2, // 函数调用时 函数名与 () 之间不能有空格
		'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
		'no-unsafe-finally': 0, // 允许finally块中的控制流操作
		'no-case-declarations': 0,
		'no-unused-vars': 0
	}
};
