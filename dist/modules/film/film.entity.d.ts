import typegoose from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { Film } from "../../types/film.type.js";
import { GenreType } from '../../types/genre.type.js';
export interface FilmEntity extends Base {
}
export declare class FilmEntity extends TimeStamps implements Film {
    title: string;
    description: string;
    postData: Date;
    genre: GenreType;
    releaseYear: number;
    rating: number;
    previewVideo: string;
    video: string;
    actors: string[];
    director: string[];
    duration: number;
    commentsCount: number;
    userUrl: string;
    poster: string;
    backgroundImage: string;
    backgroundColor: string;
    constructor(data: Film);
}
export declare const FilmModel: typegoose.types.ReturnModelType<typeof FilmEntity, typegoose.types.BeAnObject>;
