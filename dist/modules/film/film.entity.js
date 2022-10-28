import { __decorate, __metadata } from "tslib";
import typegoose, { getModelForClass } from '@typegoose/typegoose';
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { GenreType } from '../../types/genre.type.js';
// import { UserEntity } from '../user/user.entity.js';
const { prop, modelOptions } = typegoose;
let FilmEntity = class FilmEntity extends TimeStamps {
    // @prop({
    //     ref: UserEntity,
    //     required: true,
    // })
    // public userId!: Ref<UserEntity>;
    constructor(data) {
        super();
        const { title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor } = data;
        this.title = title;
        this.description = description;
        this.postDate = postDate;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
        this.previewVideo = previewVideo;
        this.video = video;
        this.actors = actors;
        this.director = director;
        this.duration = duration;
        this.commentsCount = commentsCount;
        this.userUrl = userUrl;
        this.poster = poster;
        this.backgroundImage = backgroundImage;
        this.backgroundColor = backgroundColor;
    }
};
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "title", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "description", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Date)
], FilmEntity.prototype, "postDate", void 0);
__decorate([
    prop({
        required: true,
        type: () => String,
        enum: GenreType,
    }),
    __metadata("design:type", String)
], FilmEntity.prototype, "genre", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], FilmEntity.prototype, "releaseYear", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], FilmEntity.prototype, "rating", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "previewVideo", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "video", void 0);
__decorate([
    prop({ required: true, default: '' }),
    __metadata("design:type", Array)
], FilmEntity.prototype, "actors", void 0);
__decorate([
    prop({ required: true, default: '' }),
    __metadata("design:type", Array)
], FilmEntity.prototype, "director", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], FilmEntity.prototype, "duration", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], FilmEntity.prototype, "commentsCount", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "userUrl", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "poster", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "backgroundImage", void 0);
__decorate([
    prop({ required: true, default: '', trim: true }),
    __metadata("design:type", String)
], FilmEntity.prototype, "backgroundColor", void 0);
FilmEntity = __decorate([
    modelOptions({
        schemaOptions: {
            collection: 'films',
        }
    }),
    __metadata("design:paramtypes", [Object])
], FilmEntity);
export { FilmEntity };
export const FilmModel = getModelForClass(FilmEntity);
//# sourceMappingURL=film.entity.js.map