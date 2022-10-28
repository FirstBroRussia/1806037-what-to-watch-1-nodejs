import { DocumentType } from "@typegoose/typegoose/lib/types";
import CreateFilmDTO from "./dto/create-film.dto.js";
import { FilmEntity } from "./film.entity.js";

export interface FilmServiceInterface {
    create(dto: CreateFilmDTO): Promise<DocumentType<FilmEntity>>;
    findById(filmId: string): Promise<DocumentType<FilmEntity> | null>;
    findByFilmName(filmName: string): Promise<DocumentType<FilmEntity>[] | null>;
    findFilms(options?: any): Promise<DocumentType<FilmEntity>[] | null>;
    // find(objectRequest: any, options?: any): Promise<DocumentType<FilmEntity>[] | null>;
}
