import 'reflect-metadata';

import { DocumentType, ModelType } from "@typegoose/typegoose/lib/types";
import { inject, injectable } from "inversify";
// import { ConfigInterface } from "../../common/config/config.interface.js";
import { LoggerInterface } from "../../common/logger/logger.interface.js";
import { Component } from "../../types/component.types.js";
import CreateUserDTO from "./dto/create-user.dto.js";
import { UserServiceInterface } from "./user-service.interface.js";
import { UserEntity } from "./user.entity.js";

@injectable()
export default class UserService implements UserServiceInterface {
    constructor(
        @inject(Component.LoggerInterface) private logger: LoggerInterface,
        // @inject(Component.ConfigInterface) private config: ConfigInterface,
        @inject(Component.UserModel) private readonly userModel: ModelType<UserEntity>,
    ) {}

    public async create(dto: CreateUserDTO, salt: string): Promise<DocumentType<UserEntity>> {
            const user = new UserEntity(dto);
            user.setPassword(dto.password, salt);

            const result = await this.userModel.create(user);

            //////////////////////////
            const {...object} = user;
            console.log(object);
            //////////////////////////

            this.logger.info(`New user created ${user.email}`);

            return result;
        }

        public async findByEmail(email: string): Promise<DocumentType<UserEntity> | null> {
            return this.userModel.findOne({email});
        }

        public async findByUserId(userId: string): Promise<DocumentType<UserEntity> | null> {
            return await this.userModel.findById(userId).exec();
        }

        public async findOrCreate(dto: CreateUserDTO, salt: string): Promise<DocumentType<UserEntity>> {
            const existedUser = await this.findByEmail(dto.email);

            if (existedUser) {
                return existedUser;
            }

            return this.create(dto, salt);
        }
}
