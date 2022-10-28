import { DocumentType } from "@typegoose/typegoose";
// import { ObjectId } from "mongoose";
import CreateGenreDTO from "./dto/create-genre.dto.js";
import { GenreEntity } from "./genre.entity.js";

export interface GenreServiceInterface {
    create(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>>;
    findByGenreId(genreId: string): Promise<DocumentType<GenreEntity> | null>;
    findByGenreName(genreName: string): Promise<DocumentType<GenreEntity> | null>;
    findByGenreNameOrCreateGenre(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>>;
    find(objectRequest: any, options?: any): Promise<Promise<DocumentType<GenreEntity>>[]>;
    
    findByGenreNameAndDeleteFilmFromFilmsList(genreName: string, filmId: any): Promise<void | null>;
}
