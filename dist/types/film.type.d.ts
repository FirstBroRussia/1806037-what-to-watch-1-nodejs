import { GenreType } from "./genre.type.js";
export declare type Film = {
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
};
