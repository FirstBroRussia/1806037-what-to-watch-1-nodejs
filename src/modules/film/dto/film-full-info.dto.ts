import { Film } from "../../../types/film.interface.js";

export interface FullFilmInfoType extends Film {
    id: string;
}

export const filmFullInfoDTO = (plainObject: any): FullFilmInfoType => {
    const {_id, title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor} = plainObject;
    return {id: String(_id), title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor};
}
