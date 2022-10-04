import { __decorate, __metadata, __param } from "tslib";
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.types.js";
import { UserEntity } from "./user.entity.js";
let UserService = class UserService {
    constructor(logger, 
    // @inject(Component.ConfigInterface) private config: ConfigInterface,
    userModel) {
        this.logger = logger;
        this.userModel = userModel;
    }
    async create(dto, salt) {
        const user = new UserEntity(dto);
        user.setPassword(dto.password, salt);
        const result = await this.userModel.create(user);
        //////////////////////////
        const { ...object } = user;
        console.log(object);
        //////////////////////////
        this.logger.info(`New user created ${user.email}`);
        return result;
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email });
    }
    async findByUserId(userId) {
        return await this.userModel.findById(userId).exec();
    }
    async findOrCreate(dto, salt) {
        const existedUser = await this.findByEmail(dto.email);
        if (existedUser) {
            return existedUser;
        }
        return this.create(dto, salt);
    }
};
UserService = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.UserModel)),
    __metadata("design:paramtypes", [Object, Object])
], UserService);
export default UserService;
//# sourceMappingURL=user.service.js.map