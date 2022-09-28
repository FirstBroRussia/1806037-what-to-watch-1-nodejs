import { Film } from "../../types/film.type";
import { FileReaderInterface } from "./file-reader.interface";
export default class TSVFileReader implements FileReaderInterface {
    filename: string;
    private rawData;
    constructor(filename: string);
    read(): void;
    toArray(): Film[];
}
