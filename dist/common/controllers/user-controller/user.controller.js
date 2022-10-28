import { __decorate, __metadata, __param } from "tslib";
import { inject, injectable } from "inversify";
import { StatusCodes } from 'http-status-codes';
import { Component } from "../../../types/component.types.js";
import { HttpMethod } from "../../../types/http-method.enum.js";
import { Controller } from "../controller.js";
import HttpError from "../../errors/http-error.js";
import { userShortInfoDTO } from "../../../modules/user/dto/user-short-info.dto.js";
let UserController = class UserController extends Controller {
    constructor(logger, userService, configService) {
        super(logger);
        this.userService = userService;
        this.configService = configService;
        this.logger.info('Register routes for UserController...');
        this.addRoute({ path: '/register', method: HttpMethod.Post, handler: this.create });
    }
    async create(req, res, _next) {
        const newUser = req.body;
        const existsUser = await this.userService.findByEmail(newUser.email);
        if (existsUser) {
            throw new HttpError(StatusCodes.CONFLICT, `User with email «${newUser.email}» exists.`, 'UserController');
        }
        const salt = this.configService.get('SALT');
        const result = await this.userService.create(newUser, salt);
        this.send(res, StatusCodes.CREATED, userShortInfoDTO(result));
    }
    ;
};
UserController = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.UserServiceInterface)),
    __param(2, inject(Component.ConfigInterface)),
    __metadata("design:paramtypes", [Object, Object, Object])
], UserController);
export default UserController;
//# sourceMappingURL=user.controller.js.map