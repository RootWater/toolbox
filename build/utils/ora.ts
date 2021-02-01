import ora from 'ora';
import chalk from 'chalk';
import { name as pkgName } from '../../package.json';

class RewriteOra {
	private instance: ora.Ora;

	constructor(options?: string | ora.Options) {
		options = typeof options === 'string' ? { text: options } : options;

		this.instance = ora(options);
		this.instance.prefixText = chalk.blueBright(options?.prefixText ?? pkgName);
		this.instance.spinner = options?.spinner ?? 'runner';
	}

	private setText(text: string, color: ora.Color = 'black') {
		this.instance.color = color;
		this.instance.text = text;
	}

	info(text: string) {
		this.setText(chalk.blueBright(text), 'blue');
		this.rawInfo(text);
	}

	success(text: string) {
		this.setText(chalk.greenBright(text), 'green');
		this.rawSuccess(text);
	}

	warn(text: string) {
		this.setText(chalk.yellowBright(text), 'yellow');
		this.rawWarn(text);
	}

	error(text: string) {
		this.setText(chalk.redBright(text), 'red');
		this.rawError(text);
	}

	rawInfo(text?: string) {
		this.instance.info(chalk.blueBright(text));
	}

	rawSuccess(text?: string) {
		this.instance.succeed(chalk.greenBright(text));
	}

	rawWarn(text?: string) {
		this.instance.warn(chalk.yellowBright(text));
	}

	rawError(text?: string) {
		this.instance.fail(chalk.redBright(text));
	}

	start() {
		this.instance.start();
	}

	stop() {
		this.instance.stop();
	}

	clear() {
		this.instance.clear();
	}
}

export default RewriteOra;
