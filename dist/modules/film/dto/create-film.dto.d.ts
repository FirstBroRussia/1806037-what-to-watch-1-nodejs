import { GenreType } from "../../../types/genre.type.js";
export default class CreateFilmDTO {
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
}
