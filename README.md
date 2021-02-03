# super-toolbox
便于开发的超级工具库，其中集成了 lodash、axios、dayjs 等常用函数。

## 安装
```
yarn [install]
```

## 测试
```
yarn test
```

## 打包
```
yarn build[:dev] // 可选目标环境，包含 umd、min、esm、cjs、system、module
```

## dts 声明文件
```
yarn api
```

## api 文档生成
```
yarn doc
```

## 自动生成 changelog
```
yarn changelog
```

## 规范化提交
```
yarn commit
```

## 发布
```
yarn publish[:(patch|minor|major|premajor)]
```

## 添加函数
在 src 下在对应目录添加函数名文件并默认导出。
```
src/array-tool/oneOf.ts

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
const oneOf = (target: BasicType, targetArr?: BasicType[]) => (targetArr ?? []).includes(target);

export default oneOf;

```

## 按需添加第三方函数库函数
在 scripts 下的 plugins 中添加函数库名文件，并导出所需的函数名数组。
```
scripts/plugins/lodash.ts

module.exports = [
	'compact',
	'difference',
	{ name: 'fromEntries', path: 'fromPairs' } // 修改导出函数名
];
```

## 结尾
初次尝试 rollup 打包函数库，若有不足请指出，以往的 cv 大法可以停止了 (*￣︶￣)！