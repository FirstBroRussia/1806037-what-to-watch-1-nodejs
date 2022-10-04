import { createWriteStream } from "fs";
export default class TSVFileWriter {
    constructor(filename) {
        this.filename = filename;
        this.stream = createWriteStream(this.filename, {
            flags: 'w',
            encoding: 'utf-8',
            highWaterMark: 2 ** 16,
            autoClose: true,
        });
    }
    async write(row) {
        if (!(this.stream.write(`${row}\n`))) {
            return new Promise((resolve) => {
                this.stream.once('drain', () => resolve());
            });
        }
        return Promise.resolve();
    }
}
//# sourceMappingURL=tsv-file-writer.js.map