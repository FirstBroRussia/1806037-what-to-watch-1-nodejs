import got from 'got';
import OfferGenerator from '../common/file-reader/offer-generation/offer-generator.js';
import TSVFileWriter from '../common/file-writer/tsv-file-writer.js';
export default class GenerateCommand {
    constructor() {
        this.name = '--generate';
    }
    async execute(...parameters) {
        const [count, filepath, url] = parameters;
        const dataCount = Number.parseInt(count, 10);
        try {
            this.initialData = await got.get(url).json();
        }
        catch {
            return console.log(`Can't fetch data from ${url}`);
        }
        const OfferGeneratorString = new OfferGenerator(this.initialData);
        const tsvFileWriter = new TSVFileWriter(filepath);
        for (let index = 0; index < dataCount; index++) {
            await tsvFileWriter.write(OfferGeneratorString.generate());
        }
        console.log(`File ${filepath} was created!`);
    }
}
;
//# sourceMappingURL=generate-command.js.map