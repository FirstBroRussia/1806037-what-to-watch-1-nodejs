import 'reflect-metadata';
import { DocumentType, ModelType } from "@typegoose/typegoose/lib/types";
import { LoggerInterface } from "../../common/logger/logger.interface.js";
import CreateUserDTO from "./dto/create-user.dto.js";
import { UserServiceInterface } from "./user-service.interface.js";
import { UserEntity } from "./user.entity.js";
export default class UserService implements UserServiceInterface {
    private logger;
    private readonly userModel;
    constructor(logger: LoggerInterface, userModel: ModelType<UserEntity>);
    create(dto: CreateUserDTO, salt: string): Promise<DocumentType<UserEntity>>;
    findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
    findByUserId(userId: string): Promise<DocumentType<UserEntity> | null>;
    findOrCreate(dto: CreateUserDTO, salt: string): Promise<DocumentType<UserEntity>>;
}
