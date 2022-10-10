import { __decorate, __metadata } from "tslib";
import typegoose, { getModelForClass } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { createSHA256 } from "../../utils/common.js";
const { prop, modelOptions } = typegoose;
let UserEntity = class UserEntity extends TimeStamps {
    constructor(data) {
        super();
        this.name = data.name;
        this.email = data.email;
        this.avatar = data?.avatar;
    }
    setPassword(password, salt) {
        this.password = createSHA256(password, salt);
    }
    getPassword() {
        return this.password;
    }
};
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    prop({ unique: true, required: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    prop({ required: false, default: '' }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    prop({ required: true, default: '' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    prop(),
    __metadata("design:type", Array)
], UserEntity.prototype, "filmsId", void 0);
UserEntity = __decorate([
    modelOptions({
        schemaOptions: {
            collection: 'users',
        }
    }),
    __metadata("design:paramtypes", [Object])
], UserEntity);
export { UserEntity };
export const UserModel = getModelForClass(UserEntity);
//# sourceMappingURL=user.entity.js.map