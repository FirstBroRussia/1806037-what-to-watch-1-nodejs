import { __decorate, __metadata, __param } from "tslib";
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { Component } from '../../types/component.types.js';
import mongoose from 'mongoose';
let DatabaseService = class DatabaseService {
    constructor(logger) {
        this.logger = logger;
    }
    ;
    async connect(uri) {
        this.logger.info('Try to connect to MongoDB...');
        await mongoose.connect(uri);
        this.logger.info('Database connection established.');
    }
    async disconnect() {
        await mongoose.disconnect();
        this.logger.info('Database connection closed.');
    }
};
DatabaseService = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __metadata("design:paramtypes", [Object])
], DatabaseService);
export default DatabaseService;
//# sourceMappingURL=database.service.js.map