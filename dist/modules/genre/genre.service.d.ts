import { DocumentType, ModelType } from "@typegoose/typegoose/lib/types.js";
import { LoggerInterface } from "../../common/logger/logger.interface.js";
import CreateGenreDTO from "./dto/create-genre.dto.js";
import { GenreServiceInterface } from "./genre-service.interface.js";
import { GenreEntity } from "./genre.entity.js";
export default class GenreService implements GenreServiceInterface {
    private readonly logger;
    private readonly genreModel;
    constructor(logger: LoggerInterface, genreModel: ModelType<GenreEntity>);
    create(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>>;
    findByGenreId(genreId: string): Promise<DocumentType<GenreEntity> | null>;
    findByGenreName(genreName: string): Promise<DocumentType<GenreEntity> | null>;
    findByGenreNameOrCreateGenre(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>>;
    find(objectRequest: any, options?: any): Promise<Promise<DocumentType<GenreEntity>>[]>;
    findByGenreNameAndDeleteFilmFromFilmsList(genreName: string, filmId: any): Promise<void | null>;
}
