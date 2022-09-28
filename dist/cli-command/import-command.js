import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
export default class ImportCommand {
    constructor() {
        this.name = '--import';
    }
    execute(filename) {
        const fileReader = new TSVFileReader(filename.trim());
        try {
            fileReader.read();
            console.log(fileReader.toArray());
        }
        catch (err) {
            if (!(err instanceof Error)) { // Данная проверка отслаивает ошибки типа unknown и заданного типа Error
                throw err;
            }
            console.log(`${err.message}`);
        }
    }
}
//# sourceMappingURL=import-command.js.map