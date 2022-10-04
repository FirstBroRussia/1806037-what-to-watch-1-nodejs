/// <reference types="node" />
import EventEmitter from "events";
import { FileReaderInterface } from "./file-reader.interface";
export default class TSVFileReader extends EventEmitter implements FileReaderInterface {
    filename: string;
    constructor(filename: string);
    read(): Promise<void>;
}
