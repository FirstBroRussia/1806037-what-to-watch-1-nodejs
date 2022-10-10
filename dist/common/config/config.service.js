import { __decorate, __metadata, __param } from "tslib";
import 'reflect-metadata';
import dotenv from "dotenv";
import { injectable, inject } from 'inversify';
import { configSchema } from "./config.schema.js";
import { Component } from '../../types/component.types.js';
let ConfigService = class ConfigService {
    constructor(logger) {
        this.logger = logger;
        const parsedOutput = dotenv.config();
        if (parsedOutput.error) {
            throw new Error('Can\'t read .env file. Perhaps the file does not exists.');
        }
        configSchema.load({});
        configSchema.validate({
            allowed: 'strict',
            output: this.logger.error, // или logger.info
        });
        this.config = configSchema.getProperties();
        this.logger.info('.env file found and successfully parsed!');
    }
    get(key) {
        return this.config[key];
    }
};
ConfigService = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __metadata("design:paramtypes", [Object])
], ConfigService);
export default ConfigService;
//# sourceMappingURL=config.service.js.map