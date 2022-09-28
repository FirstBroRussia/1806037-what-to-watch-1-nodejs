import {readFileSync} from "fs";
import {CLICommandInterface} from "./cli-command.interface.js"

export default class VersionCommand implements CLICommandInterface {
	public readonly name = '--version';

	private readVersion(): string {
		const contentPageJSON = readFileSync('./package.json', 'utf-8'); // ПОЧЕМУ ДАННЫЙ ПУТЬ К ФАЙЛУ КОРРЕКТНЫЙ???
		const content = JSON.parse(contentPageJSON)

		return content.version;
	}

	public async execute() {
		const version = this.readVersion();
		console.log(version);
	}
}
