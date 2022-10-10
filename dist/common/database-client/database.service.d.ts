import 'reflect-metadata';
import { DatabaseInterface } from "./database.interface.js";
import { LoggerInterface } from '../logger/logger.interface.js';
export default class DatabaseService implements DatabaseInterface {
    private logger;
    constructor(logger: LoggerInterface);
    connect(uri: string): Promise<void>;
    disconnect(): Promise<void>;
}
