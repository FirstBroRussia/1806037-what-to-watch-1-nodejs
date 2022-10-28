import { __decorate, __metadata, __param } from "tslib";
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import express from 'express';
import { Component } from "../types/component.types.js";
import { getURI } from '../utils/db.js';
let Application = class Application {
    constructor(logger, config, databaseClient, filmController, userController, exceptionFilter) {
        this.logger = logger;
        this.config = config;
        this.databaseClient = databaseClient;
        this.filmController = filmController;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
        this.expressApp = express();
    }
    registerRoutes() {
        this.expressApp.use('/films', this.filmController.router);
        this.expressApp.use('/', this.userController.router);
    }
    registerMiddlewares() {
        this.expressApp.use(express.json());
    }
    registerExceptionFilters() {
        this.expressApp.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }
    async init() {
        this.logger.info('Application initialization...');
        this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
        const uri = getURI(this.config.get('DB_USER'), this.config.get('DB_PASSWORD'), this.config.get('DB_HOST'), this.config.get('DB_PORT'));
        await this.databaseClient.connect(uri);
        this.registerMiddlewares();
        this.registerRoutes();
        this.registerExceptionFilters();
        this.expressApp.listen(this.config.get('PORT'));
        this.logger.info(`Server started on http://localhost:${this.config.get('PORT')}`);
    }
};
Application = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.ConfigInterface)),
    __param(2, inject(Component.DatabaseInterface)),
    __param(3, inject(Component.FilmController)),
    __param(4, inject(Component.UserController)),
    __param(5, inject(Component.ExceptionFilterInterface)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], Application);
export default Application;
//# sourceMappingURL=application.js.map