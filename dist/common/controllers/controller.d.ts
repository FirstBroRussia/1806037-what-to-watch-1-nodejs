import 'reflect-metadata';
import { Response, Router } from 'express';
import { ControllerInterface } from './controller.interface.js';
import { LoggerInterface } from '../logger/logger.interface.js';
import { RouteInterface } from '../../types/route.interface.js';
export declare abstract class Controller implements ControllerInterface {
    protected readonly logger: LoggerInterface;
    private readonly _router;
    constructor(logger: LoggerInterface);
    get router(): Router;
    addRoute(route: RouteInterface): void;
    send<T>(res: Response, statusCode: number, data: T): void;
}
