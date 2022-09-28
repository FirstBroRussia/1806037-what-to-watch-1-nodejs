import { CLICommandInterface } from './cli-command.interface.js';
export default class ImportCommand implements CLICommandInterface {
    readonly name = "--import";
    execute(filename: string): void;
}
