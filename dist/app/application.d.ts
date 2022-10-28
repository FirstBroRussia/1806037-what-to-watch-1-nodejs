import 'reflect-metadata';
import { ConfigInterface } from "../common/config/config.interface.js";
import { LoggerInterface } from "../common/logger/logger.interface.js";
import { DatabaseInterface } from '../common/database-client/database.interface.js';
import { ControllerInterface } from '../common/controllers/controller.interface.js';
import { ExceptionFilterInterface } from '../common/errors/exception-filter.interface.js';
export default class Application {
    private logger;
    private config;
    private databaseClient;
    private filmController;
    private userController;
    private exceptionFilter;
    private expressApp;
    constructor(logger: LoggerInterface, config: ConfigInterface, databaseClient: DatabaseInterface, filmController: ControllerInterface, userController: ControllerInterface, exceptionFilter: ExceptionFilterInterface);
    registerRoutes(): void;
    registerMiddlewares(): void;
    registerExceptionFilters(): void;
    init(): Promise<void>;
}
