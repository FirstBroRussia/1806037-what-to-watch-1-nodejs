import EventEmitter from "events";
import { createReadStream } from "fs";
export default class TSVFileReader extends EventEmitter {
    constructor(filename) {
        super();
        this.filename = filename;
    }
    async read() {
        const stream = createReadStream(this.filename, {
            highWaterMark: 16384,
            encoding: 'utf-8',
        });
        let lineRead = '';
        let endLinePosition = -1;
        let importedRowCount = 0;
        for await (const chunk of stream) {
            lineRead += chunk.toString();
            while ((endLinePosition = lineRead.indexOf('\n')) >= 0) {
                const completeRow = lineRead.slice(0, endLinePosition + 1);
                lineRead = lineRead.slice(++endLinePosition);
                importedRowCount++;
                await new Promise((resolve) => {
                    this.emit('line', completeRow, resolve);
                });
            }
        }
        this.emit('end', importedRowCount);
    }
    ;
}
//# sourceMappingURL=tsv-file-reader.js.map