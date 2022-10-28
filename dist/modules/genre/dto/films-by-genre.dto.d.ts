import { Film } from "../../../types/film.type.js";
export declare type FilmsByGenreDTO = {
    id: string;
    name: string;
    filmsList: Film[];
};
export declare const filmsByGenreDTO: (plainObject: any) => FilmsByGenreDTO;
