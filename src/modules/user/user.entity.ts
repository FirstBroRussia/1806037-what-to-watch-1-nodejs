import { User } from "../../types/user.type.js";
import typegoose, {getModelForClass, Ref} from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { createSHA256 } from "../../utils/common.js";
import { FilmEntity } from "../film/film.entity.js";

const {prop, modelOptions} = typegoose;

export interface UserEntity extends Base {}

@modelOptions({
    schemaOptions: {
        collection: 'users',
    }
})
export class UserEntity extends TimeStamps implements User {
    @prop({required: true})
    public name!: string;

    @prop({unique: true, required: true})
    public email!: string;

    @prop({required: false, default: ''})
    public avatar?: string;

    @prop({required: true, default: ''})
    private password!: string;

    @prop()
    public filmsId?: Ref<FilmEntity>[]

    constructor(data: User) {
        super();

        this.name = data.name;
        this.email = data.email;
        this.avatar = data?.avatar;
    }

    public setPassword(password: string, salt: string) {
        this.password = createSHA256(password, salt);
    }

    public getPassword() {
        return this.password;
    }
}

export const UserModel = getModelForClass(UserEntity);
