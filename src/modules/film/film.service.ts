import 'reflect-metadata';

import { inject, injectable } from "inversify";
import { DocumentType } from '@typegoose/typegoose';
import { FilmServiceInterface } from "./film-service.interface.js";
import { Component } from '../../types/component.types.js';
import { LoggerInterface } from '../../common/logger/logger.interface.js';
import createFilmDto from './dto/create-film.dto.js';
import { FilmEntity } from './film.entity.js';
import { ModelType } from '@typegoose/typegoose/lib/types.js';

@injectable()
export default class FilmService implements FilmServiceInterface {
    constructor(
        @inject(Component.LoggerInterface) private logger: LoggerInterface,
        @inject(Component.FilmModel) private readonly filmModel: ModelType<FilmEntity>,
        ) {}

    public async create(dto: createFilmDto): Promise<DocumentType<FilmEntity>> {
        const result = await this.filmModel.create(dto);
        this.logger.info(`New film created ${dto.title}`);

        return result;
    }

    public async findById(filmId: string): Promise<DocumentType<FilmEntity> | null> {
        return await this.filmModel.findById(filmId).exec();
    }

    public async findByFilmName(filmName: string): Promise<DocumentType<FilmEntity>[] | null> {
        return await this.filmModel.findOne({title: filmName});
    }

    public async findFilms(options?: any): Promise<DocumentType<FilmEntity>[] | null> {
        if (options) {
            if (options.filmsCount) {
                return await this.filmModel.aggregate([
                    { $sort: {postDate: -1} },
                    { $limit: options.filmsCount }
                ]);
            }
        }

        return await this.filmModel.find().sort({postDate: -1});
    }

    // public async find(objectRequest: any, options?: any): Promise<DocumentType<FilmEntity>[] | null> {
    //     return await this.filmModel.find(ob)
    // }
}
