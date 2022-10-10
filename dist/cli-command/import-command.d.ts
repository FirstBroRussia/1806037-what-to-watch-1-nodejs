import { CLICommandInterface } from './cli-command.interface.js';
export default class ImportCommand implements CLICommandInterface {
    readonly name = "--import";
    private logger;
    private databaseService;
    private filmService;
    private genreService;
    constructor();
    private saveFilmToDatabase;
    private onLine;
    private onComplete;
    execute(...parameters: string[]): Promise<void>;
}
