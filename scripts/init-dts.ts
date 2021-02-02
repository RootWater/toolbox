import { resolve } from '../build/utils/util';
import { Extractor, ExtractorConfig, ExtractorResult } from '@microsoft/api-extractor';

const apiExtractorJsonPath: string = resolve('api-extractor.json');

// Load and parse the api-extractor.json file
const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

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
