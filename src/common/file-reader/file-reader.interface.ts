/* eslint-disable node/no-unsupported-features/es-syntax */
export interface FileReaderInterface {
  readonly filename: string;
  read(): void;
}
