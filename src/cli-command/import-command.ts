import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
import { createFilmItem, getErrorMessage } from '../utils/common.js';
import {CLICommandInterface} from './cli-command.interface.js';

export default class ImportCommand implements CLICommandInterface {
	public readonly name = '--import';

	private onLine(line: string) {
		const film = createFilmItem(line);
		console.log(film);
	}

	private onComplete(count: number) {
		console.log(`${count} rows imported.`);
	}

	public async execute(filename: string): Promise<void> {
		const fileReader = new TSVFileReader(filename.trim());
		fileReader.on('line', this.onLine);
		fileReader.on('end', this.onComplete);

		try {
			await fileReader.read();
		} catch (err) {
			console.log(`Can't read the file: ${getErrorMessage(err)}`);
		}
	}
}
