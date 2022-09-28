import {CLICommandInterface} from "../cli-command/cli-command.interface";

type ParsedCommand = {
	[key: string]: string[],
};

export default class CLIApplication {
  private readonly defaultCommand = '--help';
  private commands: {[propertyName: string]: CLICommandInterface} = {};

  private parseCommand(cliArguments: string[]): ParsedCommand {
	const parsedCommand: ParsedCommand = {};
	let command = '';

	return cliArguments.reduce((parsedCommandObj, item) => {
		if (item.startsWith('--')) {
			parsedCommandObj[item] = [];
			command = item;
		} else if (command && item) {
			parsedCommandObj[command].push(item);
		}

		return parsedCommandObj;
	}, parsedCommand);
  };

  public registerCommands(commandList: CLICommandInterface[]): void {
	commandList.reduce((commandsObject, CLICommand) => {
		commandsObject[CLICommand.name] = CLICommand;

		return commandsObject;
	}, this.commands);
  };

  public getCommand(commandName: string): CLICommandInterface {
	return this.commands[commandName] ?? this.commands[this.defaultCommand]
  };

  public processCommand(argv: string[]): void {
	const parsedCommand = this.parseCommand(argv);
	const [commandName] = Object.keys(parsedCommand);
	const command = this.getCommand(commandName);
	const commandArguments = parsedCommand[commandName] ?? [];
	command.execute(...commandArguments);
  }
}
