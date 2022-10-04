import mongoose from "mongoose";
import { User } from "../../types/user.type.js";

export interface UserDocument extends User, mongoose.Document {
    createdAt: Date,
    updateAt: Date,
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [1, 'Min length for username is 1'],
        maxlength: [15, 'Min length for username is 15']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4}])?$/, 'Email is incorrect'],
    },
    avatarPath: {
        type: String,
        required: false,
        match: [/(^.*.jpg$)|(^.*.png$)/, 'Image format only is .jpg and .png'],
    },
    // password: String,
}, {
    timestamps: true,
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
