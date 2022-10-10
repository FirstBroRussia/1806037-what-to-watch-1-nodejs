import 'reflect-metadata';
import { Logger } from "pino";
import { LoggerInterface } from "./logger.interface.js";
export default class LoggerService implements LoggerInterface {
    private logger;
    constructor(logger?: Logger);
    debug(message: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    error(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
}
