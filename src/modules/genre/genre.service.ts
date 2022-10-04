import { DocumentType, ModelType } from "@typegoose/typegoose/lib/types.js";
import { inject, injectable } from "inversify";
// import { ObjectId } from "mongoose";
import { LoggerInterface } from "../../common/logger/logger.interface.js";
import { Component } from "../../types/component.types.js";
import CreateGenreDTO from "./dto/create-genre.dto.js";
import CreateGenreDto from "./dto/create-genre.dto.js";
import { GenreServiceInterface } from "./genre-service.interface.js";
import { GenreEntity } from "./genre.entity.js";

@injectable()
export default class GenreService implements GenreServiceInterface {
    constructor(
        @inject(Component.LoggerInterface) private readonly logger: LoggerInterface,
        @inject(Component.GenreModel) private readonly genreModel: ModelType<GenreEntity>,
    ) {}

    public async create(genreDTO: CreateGenreDto): Promise<DocumentType<GenreEntity>> {
        const result = await this.genreModel.create(genreDTO);
        this.logger.info(`New genre created: ${genreDTO.name}`);

        return result;
    }

    public async findByGenreId(genreId: string): Promise<DocumentType<GenreEntity> | null> {
        return this.genreModel.findById(genreId).exec();
    }

    public async findByGenreName(genreName: string): Promise<DocumentType<GenreEntity> | null> {
        return this.genreModel.findOne({name: genreName}).exec();
    }

    public async findByGenreNameOrCreate(genreName: string, genreDTO: CreateGenreDto): Promise<DocumentType<GenreEntity>> {
        const existedGenre = await this.findByGenreName(genreName);

        if (existedGenre) {
            return existedGenre;
        }

        return this.create(genreDTO);
    }

    public async find(): Promise<Promise<DocumentType<GenreEntity>>[]> {
        return await this.genreModel.find();
    }

    public async findByGenreNameAndUpdateFilmsIdOrCreateGenre(genreName: string, genreDTO: CreateGenreDTO, filmId: any): Promise<DocumentType<GenreEntity> | null> {
        const genre = await this.findByGenreNameOrCreate(genreName, genreDTO);
        const result = await this.genreModel.findOneAndUpdate({name: genreName}, {filmsId: [...genre.filmsId, filmId]}, {new: true}).exec();

        return result;
    }



    // public async find(): Promise<Promise<DocumentType<GenreEntity, BeAnObject>>[]> {
    //     return this.genreModel.aggregate([
    //         {
    //         $lookup: {
    //             from: 'genres',
    //             let: { categoryId: '$_id' },
    //             pipeline: [
    //                 { $match: { $expr: { $in: ['$$categoryId', '$categories'] } } },
    //                 { $project: { _id: 1 } }
    //             ],
    //             as: 'genres',
    //         },
    //         {
    //             $addFields: {
    //                 id: { $toString: '$_id' },
    //                 offerCount: { $size: '$genres' },
    //             },
    //         },
    //         {$unset: 'genres'},
    //     }
    //     ]).exec();
    // }

}
