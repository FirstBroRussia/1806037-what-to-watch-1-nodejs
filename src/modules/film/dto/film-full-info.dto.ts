import { Film } from "../../../types/film.type.js";

export const filmFullInfoDTO = (plainObject: any): Film => {
    const {title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor} = plainObject;
    return {title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor};
}
