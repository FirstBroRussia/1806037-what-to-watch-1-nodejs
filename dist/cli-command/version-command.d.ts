import { CLICommandInterface } from "./cli-command.interface.js";
export default class VersionCommand implements CLICommandInterface {
    readonly name = "--version";
    private readVersion;
    execute(): Promise<void>;
}
