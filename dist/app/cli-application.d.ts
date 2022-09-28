import { CLICommandInterface } from "../cli-command/cli-command.interface";
export default class CLIApplication {
    private readonly defaultCommand;
    private commands;
    private parseCommand;
    registerCommands(commandList: CLICommandInterface[]): void;
    getCommand(commandName: string): CLICommandInterface;
    processCommand(argv: string[]): void;
}
