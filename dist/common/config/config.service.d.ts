import 'reflect-metadata';
import { LoggerInterface } from "../logger/logger.interface.js";
import { ConfigInterface } from "./config.interface.js";
import { ConfigSchema } from "./config.schema.js";
export default class ConfigService implements ConfigInterface {
    private config;
    private logger;
    constructor(logger: LoggerInterface);
    get<T extends keyof ConfigSchema>(key: T): ConfigSchema[T];
}
