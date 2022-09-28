import got from 'got';

import { MockDataType } from "../common/file-reader/offer-generation/mock-data.type.js";
import OfferGenerator from '../common/file-reader/offer-generation/offer-generator.js';
import TSVFileWriter from '../common/file-writer/tsv-file-writer.js';
import { CLICommandInterface } from "./cli-command.interface.js";

export default class GenerateCommand implements CLICommandInterface {
	public readonly name = '--generate';
	private initialData!: MockDataType;

	public async execute(...parameters: string[]): Promise<void> {
		const [count, filepath, url] = parameters;
		const dataCount = Number.parseInt(count, 10);

		try {
			this.initialData = await got.get(url).json();
		} catch {
			return console.log(`Can't fetch data from ${url}`);
		}

		const OfferGeneratorString = new OfferGenerator(this.initialData);
		const tsvFileWriter = new TSVFileWriter(filepath);

		for (let index = 0; index < dataCount; index++) {
			await tsvFileWriter.write(OfferGeneratorString.generate());
		}

		console.log(`File ${filepath} was created!`);
	}
};
