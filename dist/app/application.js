import { __decorate, __metadata, __param } from "tslib";
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { Component } from "../types/component.types.js";
import { getURI } from '../utils/db.js';
let Application = class Application {
    constructor(logger, config, databaseClient) {
        this.logger = logger;
        this.config = config;
        this.databaseClient = databaseClient;
    }
    async init() {
        this.logger.info('Application initialization...');
        this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
        const uri = getURI(this.config.get('DB_USER'), this.config.get('DB_PASSWORD'), this.config.get('DB_HOST'), this.config.get('DB_PORT'));
        await this.databaseClient.connect(uri);
    }
};
Application = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.ConfigInterface)),
    __param(2, inject(Component.DatabaseInterface)),
    __metadata("design:paramtypes", [Object, Object, Object])
], Application);
export default Application;
//# sourceMappingURL=application.js.map