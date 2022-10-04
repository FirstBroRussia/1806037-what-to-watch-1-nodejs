import 'reflect-metadata';
import { ConfigInterface } from "../common/config/config.interface.js";
import { LoggerInterface } from "../common/logger/logger.interface.js";
import { DatabaseInterface } from '../common/database-client/database.interface.js';
export default class Application {
    private logger;
    private config;
    private databaseClient;
    constructor(logger: LoggerInterface, config: ConfigInterface, databaseClient: DatabaseInterface);
    init(): Promise<void>;
}
