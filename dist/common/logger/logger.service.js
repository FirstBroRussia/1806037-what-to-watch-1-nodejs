import { __decorate, __metadata } from "tslib";
import 'reflect-metadata';
import pino from "pino";
import { injectable } from 'inversify';
let LoggerService = class LoggerService {
    constructor(logger = pino()) {
        this.logger = logger;
    }
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    warn(message, ...args) {
        this.logger.warn(message, ...args);
    }
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
};
LoggerService = __decorate([
    injectable(),
    __metadata("design:paramtypes", [Object])
], LoggerService);
export default LoggerService;
//# sourceMappingURL=logger.service.js.map