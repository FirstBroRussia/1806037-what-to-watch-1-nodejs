export interface CLICommandInterface {
    readonly name: string;
    execute(...parameters: string[]): void;
}
