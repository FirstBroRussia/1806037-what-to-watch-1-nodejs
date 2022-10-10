import { DocumentType } from "@typegoose/typegoose";
import CreateGenreDTO from "./dto/create-genre.dto.js";
import { GenreEntity } from "./genre.entity.js";
export interface GenreServiceInterface {
    create(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>>;
    findByGenreId(genreId: string): Promise<DocumentType<GenreEntity> | null>;
    findByGenreName(genreName: string): Promise<DocumentType<GenreEntity> | null>;
    findByGenreNameOrCreate(genreName: string, genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>>;
    find(): Promise<Promise<DocumentType<GenreEntity>>[]>;
    findByGenreNameAndUpdateFilmsIdOrCreateGenre(genreName: string, genreDTO: CreateGenreDTO, filmId: any): Promise<DocumentType<GenreEntity> | null>;
}
