import mongoose from "mongoose";
import { User } from "../../types/user.type.js";
export interface UserDocument extends User, mongoose.Document {
    createdAt: Date;
    updateAt: Date;
}
export declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, any>;
