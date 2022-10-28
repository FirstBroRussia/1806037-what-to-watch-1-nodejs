import typegoose, {getModelForClass} from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { Film } from "../../types/film.type.js";
import { GenreType } from '../../types/genre.type.js';
// import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface FilmEntity extends Base {}

@modelOptions({
    schemaOptions: {
        collection: 'films',
    }
})
export class FilmEntity extends TimeStamps implements Film {
    @prop({required: true, default: '', trim: true})
    public title!: string;
    
    @prop({required: true, default: '', trim: true})
    public description!: string;
    
    @prop({required: true})
    public postDate!: Date;
    
    @prop({
        required: true,
        type: () => String,
        enum: GenreType,
    })
    public genre!: GenreType;
    
    @prop({required: true})
    public releaseYear!: number;
    
    @prop({required: true, default: 0})
    public rating!: number;
    
    @prop({required: true, default: '', trim: true})
    public previewVideo!: string;
    
    @prop({required: true, default: '', trim: true})
    public video!: string;
    
    @prop({required: true, default: ''})
    public actors!: string[];
    
    @prop({required: true, default: ''})
    public director!: string[];
    
    @prop({required: true, default: 0})
    public duration!: number;
    
    @prop({required: true, default: 0})
    public commentsCount!: number;
    
    @prop({required: true, default: '', trim: true})
    public userUrl!: string;
    
    @prop({required: true, default: '', trim: true})
    public poster!: string;
    
    @prop({required: true, default: '', trim: true})
    public backgroundImage!: string;
    
    @prop({required: true, default: '', trim: true})
    public backgroundColor!: string;

    // @prop({
    //     ref: UserEntity,
    //     required: true,
    // })
    // public userId!: Ref<UserEntity>;

    constructor(data: Film) {
        super();

        const {title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor} = data;
        
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
    
}

export const FilmModel = getModelForClass(FilmEntity);
