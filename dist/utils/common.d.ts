import { Film } from '../types/film.type.js';
export declare const createFilmItem: (row: string) => Film;
export declare const getErrorMessage: (error: unknown) => string;
export declare const createSHA256: (line: string, salt: string) => string;
