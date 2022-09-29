import { User } from "../../types/user.type";
import typegoose, {getModelForClass} from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

const {prop} = typegoose;

export interface UserEntity extends Base {}

// export class UserEntity extends TimeStamps implements User, Base {
export class UserEntity extends TimeStamps implements User {
    @prop({required: true})
    public name!: string;

    @prop({unique: true, required: true})
    public email!: string;

    @prop({required: false})
    public avatar?: string;

    @prop({required: true})
    public password!: string;
}

export const UserModel = getModelForClass(UserEntity);
