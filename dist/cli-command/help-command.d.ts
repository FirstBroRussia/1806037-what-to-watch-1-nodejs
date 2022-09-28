import { CLICommandInterface } from "./cli-command.interface.js";
export default class HelpCommand implements CLICommandInterface {
    readonly name = "--help";
    execute(): Promise<void>;
}
