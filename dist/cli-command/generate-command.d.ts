import { CLICommandInterface } from "./cli-command.interface.js";
export default class GenerateCommand implements CLICommandInterface {
    readonly name = "--generate";
    private initialData;
    execute(...parameters: string[]): Promise<void>;
}
