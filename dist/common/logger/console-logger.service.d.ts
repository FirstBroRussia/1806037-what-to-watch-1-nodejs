import { LoggerInterface } from "./logger.interface";
export default class ConsoleLoggerService implements LoggerInterface {
    debug(message: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    error(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
}
