import { Request, Response, NextFunction } from "express";
import { LoggerInterface } from "../logger/logger.interface.js";
import { ExceptionFilterInterface } from "./exception-filter.interface.js";
import HttpError from "./http-error.js";
export default class ExceptionFilter implements ExceptionFilterInterface {
    private logger;
    constructor(logger: LoggerInterface);
    private handleHttpError;
    private handleOtherError;
    catch(error: Error | HttpError, req: Request, res: Response, next: NextFunction): void;
}
