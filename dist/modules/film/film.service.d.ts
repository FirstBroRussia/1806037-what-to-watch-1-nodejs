import 'reflect-metadata';
import { DocumentType } from '@typegoose/typegoose';
import { FilmServiceInterface } from "./film-service.interface.js";
import { LoggerInterface } from '../../common/logger/logger.interface.js';
import createFilmDto from './dto/create-film.dto.js';
import { FilmEntity } from './film.entity.js';
import { ModelType } from '@typegoose/typegoose/lib/types.js';
export default class FilmService implements FilmServiceInterface {
    private logger;
    private readonly filmModel;
    constructor(logger: LoggerInterface, filmModel: ModelType<FilmEntity>);
    create(dto: createFilmDto): Promise<DocumentType<FilmEntity>>;
    findById(filmId: string): Promise<DocumentType<FilmEntity> | null>;
    findByFilmName(filmName: string): Promise<DocumentType<FilmEntity>[] | null>;
    findFilms(options?: any): Promise<DocumentType<FilmEntity>[] | null>;
}
