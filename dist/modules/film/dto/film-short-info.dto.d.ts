import { GenreType } from "../../../types/genre.type.js";
export declare type FilmShortInfoType = {
    title: string;
    postDate: Date;
    genre: GenreType;
    previewVideo: string;
    commentsCount: number;
    userUrl: string;
    poster: string;
};
export declare const filmShortInfoDTO: (plainObject: any) => FilmShortInfoType;
