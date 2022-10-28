import { Film } from '../types/film.type.js';
export declare const createFilmItem: (row: string) => Film;
export declare const desSortArrayByTime: <T>(array: T[], options?: any) => T[];
export declare const getErrorMessage: (error: unknown) => string;
export declare const createSHA256: (line: string, salt: string) => string;
export declare const createErrorObject: (message: string) => {
    error: string;
};
