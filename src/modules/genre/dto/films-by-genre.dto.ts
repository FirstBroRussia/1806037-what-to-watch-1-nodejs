import { Film } from "../../../types/film.type.js";

export type FilmsByGenreDTO = {
    id: string;
    name: string;
    filmsList: Film[];
};

export const filmsByGenreDTO = (plainObject: any): FilmsByGenreDTO => {
    return {
        id: plainObject._id,
        name: plainObject.name,
        filmsList: plainObject.filmsList
    }
};
