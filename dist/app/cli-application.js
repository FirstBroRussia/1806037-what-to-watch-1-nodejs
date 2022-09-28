export default class CLIApplication {
    constructor() {
        this.defaultCommand = '--help';
        this.commands = {};
    }
    parseCommand(cliArguments) {
        const parsedCommand = {};
        let command = '';
        return cliArguments.reduce((parsedCommandObj, item) => {
            if (item.startsWith('--')) {
                parsedCommandObj[item] = [];
                command = item;
            }
            else if (command && item) {
                parsedCommandObj[command].push(item);
            }
            return parsedCommandObj;
        }, parsedCommand);
    }
    ;
    registerCommands(commandList) {
        commandList.reduce((commandsObject, CLICommand) => {
            commandsObject[CLICommand.name] = CLICommand;
            return commandsObject;
        }, this.commands);
    }
    ;
    getCommand(commandName) {
        return this.commands[commandName] ?? this.commands[this.defaultCommand];
    }
    ;
    processCommand(argv) {
        const parsedCommand = this.parseCommand(argv);
        const [commandName] = Object.keys(parsedCommand);
        const command = this.getCommand(commandName);
        const commandArguments = parsedCommand[commandName] ?? [];
        command.execute(...commandArguments);
    }
}
//# sourceMappingURL=cli-application.js.map