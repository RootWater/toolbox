import { ModuleFormat } from 'rollup';

export declare type ModuleFormatType = ModuleFormat | 'min';

export declare type FormatFileType = {
	[key in ModuleFormatType]: string;
};
