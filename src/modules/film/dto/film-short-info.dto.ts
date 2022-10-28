import { GenreType } from "../../../types/genre.type.js";

export type FilmShortInfoType = {
    title: string,
	postDate: Date,
	genre: GenreType,
	previewVideo: string,   // Может быть тип данных что то по типу URL
	commentsCount: number,
	userUrl: string,   // Может быть тип данных что то по типу URL
	poster: string,   // Может быть тип данных что то по типу URL
};

export const filmShortInfoDTO = (plainObject: any): FilmShortInfoType => {
    const {title, postDate, genre, previewVideo, userUrl, poster, commentsCount} = plainObject;
    return {title, postDate, genre, previewVideo, userUrl, poster, commentsCount};
}
