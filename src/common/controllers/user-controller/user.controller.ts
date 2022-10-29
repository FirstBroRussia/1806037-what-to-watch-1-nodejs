import { inject, injectable } from "inversify";
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Component } from "../../../types/component.types.js";
import { HttpMethod } from "../../../types/http-method.enum.js";
import { LoggerInterface } from "../../logger/logger.interface.js";
import { Controller } from "../controller.js"
import { UserServiceInterface } from "../../../modules/user/user-service.interface.js";
import { ConfigInterface } from "../../config/config.interface.js";
import CreateUserDTO from "../../../modules/user/dto/create-user.dto.js";
import HttpError from "../../errors/http-error.js";
import { userShortInfoDTO } from "../../../modules/user/dto/user-short-info.dto.js";
import LoginUserDTO from "../../../modules/user/dto/login-user.dto.js";

@injectable()
export default class UserController extends Controller {
    constructor(
        @inject(Component.LoggerInterface) logger: LoggerInterface,
        @inject(Component.UserServiceInterface) private readonly userService: UserServiceInterface,
        @inject(Component.ConfigInterface) private readonly configService: ConfigInterface,
    ) {
        super(logger);
        this.logger.info('Register routes for UserController...');

        this.addRoute({path: '/register', method: HttpMethod.Post, handler: this.create});
        this.addRoute({path: '/login', method: HttpMethod.Post, handler: this.login});
    }

    public async create(req: Request<Record<string, unknown>, Record<string, unknown>, CreateUserDTO>, res: Response, _next: NextFunction): Promise<void> {
        const newUser = req.body;
        const existsUser = await this.userService.findByEmail(newUser.email);

        if (existsUser) {
            throw new HttpError(
                StatusCodes.CONFLICT,
                `User with email «${newUser.email}» exists.`,
                'UserController'
            );
        }

        const salt = this.configService.get('SALT');
        const result = await this.userService.create(newUser, salt);
        
        this.created(
            res,
            userShortInfoDTO(result),
        );
    };

    public async login(req: Request<Record<string, unknown>, Record<string, unknown>, LoginUserDTO>, _res: Response, _next: NextFunction): Promise<void> {
        const loginData = req.body;

        const existsUser = await this.userService.findByEmail(loginData.email);

        console.log(existsUser);

        if (!existsUser) {
            throw new HttpError(
                StatusCodes.UNAUTHORIZED,
                `User with email ${loginData.email} not found`,
                'UserController'
            );
        }

        // ЗАГЛУШКА !!!
        throw new HttpError(
            StatusCodes.NOT_IMPLEMENTED,
            'Not implemented',
            'UserController'
        );

    };
}
