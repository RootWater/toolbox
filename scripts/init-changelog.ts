import conventionalChangelog from 'conventional-changelog';
import fs from 'fs';
import { resolve } from '../build/utils/util';

/** 自动生成 changelog */
const changelog = async () => {
	const changelogPath: string = resolve('CHANGELOG.md');
	const resultArray = ['# 工具库更新日志\n\n'];
	/* 对提交命令进行拦截 conventional-changelog -p angular -i CHANGELOG.md -w -r 0 */
	const changelogPipe = conventionalChangelog({
		preset: 'angular',
		releaseCount: 0
	});

	changelogPipe.setEncoding('utf8');

	// 原来的 commits 路径是进入提交列表
	changelogPipe.on('data', (chunk) =>
		resultArray.push(chunk.replace(/\/commits\//g, '/commit/'))
	);
	changelogPipe.on('end', () => fs.createWriteStream(changelogPath).write(resultArray.join('')));
};

changelog();
