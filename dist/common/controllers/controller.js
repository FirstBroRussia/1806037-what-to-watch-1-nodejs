import { __decorate, __metadata } from "tslib";
import 'reflect-metadata';
import { injectable } from 'inversify';
import { Router } from 'express';
import asyncHandler from 'express-async-handler';
let Controller = class Controller {
    constructor(logger) {
        this.logger = logger;
        this._router = Router();
    }
    get router() {
        return this._router;
    }
    addRoute(route) {
        this._router[route.method](route.path, asyncHandler(route.handler.bind(this)));
        this.logger.info(`Route registered: ${route.method.toUpperCase()} ${route.path}`);
    }
    send(res, statusCode, data) {
        res
            .type('application/json')
            .status(statusCode)
            .json(data);
    }
};
Controller = __decorate([
    injectable(),
    __metadata("design:paramtypes", [Object])
], Controller);
export { Controller };
//# sourceMappingURL=controller.js.map