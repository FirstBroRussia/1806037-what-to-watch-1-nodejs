import { FileWriterInterface } from "./file-writer.interface.js";
export default class TSVFileWriter implements FileWriterInterface {
    readonly filename: string;
    private stream;
    constructor(filename: string);
    write(row: string): Promise<void>;
}
