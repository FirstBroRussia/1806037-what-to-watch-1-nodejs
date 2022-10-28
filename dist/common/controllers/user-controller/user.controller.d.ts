import { Response, Request, NextFunction } from 'express';
import { LoggerInterface } from "../../logger/logger.interface.js";
import { Controller } from "../controller.js";
import { UserServiceInterface } from "../../../modules/user/user-service.interface.js";
import { ConfigInterface } from "../../config/config.interface.js";
import CreateUserDTO from "../../../modules/user/dto/create-user.dto.js";
export default class UserController extends Controller {
    private readonly userService;
    private readonly configService;
    constructor(logger: LoggerInterface, userService: UserServiceInterface, configService: ConfigInterface);
    create(req: Request<Record<string, unknown>, Record<string, unknown>, CreateUserDTO>, res: Response, _next: NextFunction): Promise<void>;
}
