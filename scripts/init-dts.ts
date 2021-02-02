import { getLibName, resolve } from '../build/utils/util';
import { Extractor, ExtractorConfig, ExtractorResult } from '@microsoft/api-extractor';
import fs, { BaseEncodingOptions } from 'fs';

const apiExtractorJsonPath: string = resolve('api-extractor.json');

// Load and parse the api-extractor.json file
const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

const FILE_OPTIONS: BaseEncodingOptions = { encoding: 'utf-8' };

// 处理 dts 文件中的默认导出
let targetFileContent = fs.readFileSync(
	extractorConfig.mainEntryPointFilePath,
	FILE_OPTIONS
) as string;
targetFileContent = targetFileContent.substr(
	0,
	targetFileContent.indexOf('declare const _default')
);

fs.writeFileSync(extractorConfig.mainEntryPointFilePath, targetFileContent, FILE_OPTIONS);

// Invoke API Extractor
const extractorResult: ExtractorResult = Extractor.invoke(extractorConfig, {
	// Equivalent to the "--local" command-line parameter
	localBuild: false,

	// Equivalent to the "--verbose" command-line parameter
	showVerboseMessages: false
});

if (extractorResult.succeeded) {
	console.log(`API Extractor completed successfully`);
} else {
	console.error(
		`API Extractor completed with ${extractorResult.errorCount} errors` +
			` and ${extractorResult.warningCount} warnings`
	);
}

// 为最后的函数库声明文件添加命名空间
const libName = getLibName();
let outputFileContent = fs.readFileSync(extractorConfig.untrimmedFilePath, FILE_OPTIONS) as string;
outputFileContent =
	outputFileContent
		.replace(/declare /g, '')
		.replace(/export/, `declare namespace ${libName} {\nexport`) +
	`\n` +
	`}` +
	`\n` +
	`export = ${libName}`;

fs.writeFileSync(extractorConfig.untrimmedFilePath, outputFileContent, FILE_OPTIONS);
