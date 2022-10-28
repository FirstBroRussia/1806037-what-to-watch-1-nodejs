var GenreEntity_1;
import { __decorate, __metadata } from "tslib";
import typegoose, { getModelForClass } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { GenreType } from '../../types/genre.type.js';
const { prop, modelOptions } = typegoose;
let GenreEntity = GenreEntity_1 = class GenreEntity extends TimeStamps {
    constructor(genre) {
        super();
        this.name = genre;
    }
};
__decorate([
    prop({
        required: true,
        trim: true,
        type: () => String,
        enum: GenreType,
    }),
    __metadata("design:type", String)
], GenreEntity.prototype, "name", void 0);
__decorate([
    prop({
        required: true,
        ref: GenreEntity_1,
    }),
    __metadata("design:type", Array)
], GenreEntity.prototype, "filmsList", void 0);
GenreEntity = GenreEntity_1 = __decorate([
    modelOptions({
        schemaOptions: {
            collection: 'genres',
        }
    }),
    __metadata("design:paramtypes", [String])
], GenreEntity);
export { GenreEntity };
export const GenreModel = getModelForClass(GenreEntity);
//# sourceMappingURL=genre.entity.js.map