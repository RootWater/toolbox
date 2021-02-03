import { getLibName, resolve } from '../build/utils/util';
import { Extractor, ExtractorConfig, ExtractorResult } from '@microsoft/api-extractor';
import fs, { BaseEncodingOptions } from 'fs';

const apiExtractorJsonPath: string = resolve('api-extractor.json');

// Load and parse the api-extractor.json file
const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

const FILE_OPTIONS: BaseEncodingOptions = { encoding: 'utf-8' };
const libName = getLibName();

// 处理 dts 文件中的默认导出
const targetFileContent = fs.readFileSync(
	extractorConfig.mainEntryPointFilePath,
	FILE_OPTIONS
) as string;
const targetReferenceContent =
	targetFileContent
		.match(/(?<=reference types=")\w+(?=")/g)
		?.map((item) => `\/\/\/<reference types="${item}"\/>`) ?? [];
const targetImportContent = targetFileContent.substring(
	targetFileContent.indexOf('import'),
	targetFileContent.indexOf(`declare const ${libName}`)
);
const targetExportContent = targetFileContent.substring(
	targetFileContent.indexOf('export {'),
	targetFileContent.indexOf(`export default ${libName}`)
);

fs.writeFileSync(
	extractorConfig.mainEntryPointFilePath,
	`${targetImportContent}\n${targetExportContent}`,
	FILE_OPTIONS
);

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
let outputFileContent = fs.readFileSync(extractorConfig.untrimmedFilePath, FILE_OPTIONS) as string;
outputFileContent =
	outputFileContent
		.replace(/declare /g, '')
		.replace(/export/, `declare namespace ${libName} {\nexport`) +
	`\n` +
	`}` +
	`\n` +
	`export = ${libName}`;

fs.writeFileSync(
	extractorConfig.untrimmedFilePath,
	`${targetReferenceContent.join('\n')}\n${outputFileContent}`,
	FILE_OPTIONS
);
