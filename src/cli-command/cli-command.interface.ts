// eslint-disable-next-line node/no-unsupported-features/es-syntax
export interface CliCommandInterface {
  readonly name: string;
  execute(...parameters: string[]): void;
}
