import { __decorate, __metadata, __param } from "tslib";
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.types.js";
import { createErrorObject } from "../../utils/common.js";
import HttpError from "./http-error.js";
let ExceptionFilter = class ExceptionFilter {
    constructor(logger) {
        this.logger = logger;
        this.logger.info('Register ExceptionFilter');
    }
    handleHttpError(error, _req, res, _next) {
        this.logger.error(`[${error.detail}]: ${error.httpStatusCode} - ${error.message}`);
        res
            .status(error.httpStatusCode)
            .json(createErrorObject(error.message));
    }
    handleOtherError(error, _req, res, _next) {
        this.logger.error(error.message);
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(createErrorObject(error.message));
    }
    catch(error, req, res, next) {
        if (error instanceof HttpError) {
            return this.handleHttpError(error, req, res, next);
        }
        this.handleOtherError(error, req, res, next);
    }
};
ExceptionFilter = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __metadata("design:paramtypes", [Object])
], ExceptionFilter);
export default ExceptionFilter;
//# sourceMappingURL=exception-filter.js.map