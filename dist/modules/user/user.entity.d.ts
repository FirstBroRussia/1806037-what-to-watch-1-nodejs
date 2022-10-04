import { User } from "../../types/user.type.js";
import typegoose, { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { FilmEntity } from "../film/film.entity.js";
export interface UserEntity extends Base {
}
export declare class UserEntity extends TimeStamps implements User {
    name: string;
    email: string;
    avatar?: string;
    private password;
    filmsId?: Ref<FilmEntity>[];
    constructor(data: User);
    setPassword(password: string, salt: string): void;
    getPassword(): string;
}
export declare const UserModel: typegoose.types.ReturnModelType<typeof UserEntity, typegoose.types.BeAnObject>;
