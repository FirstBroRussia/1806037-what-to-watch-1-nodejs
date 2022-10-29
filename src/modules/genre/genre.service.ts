import { DocumentType, ModelType } from "@typegoose/typegoose/lib/types.js";
import { inject, injectable } from "inversify";
import { Types } from "mongoose";
import { LoggerInterface } from "../../common/logger/logger.interface.js";
import { Component } from "../../types/component.types.js";
import CreateGenreDTO from "./dto/create-genre.dto.js";
import { GenreServiceInterface } from "./genre-service.interface.js";
import { GenreEntity } from "./genre.entity.js";

@injectable()
export default class GenreService implements GenreServiceInterface {
    constructor(
        @inject(Component.LoggerInterface) private readonly logger: LoggerInterface,
        @inject(Component.GenreModel) private readonly genreModel: ModelType<GenreEntity>,
    ) {}
    
    public async create(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>> {
        const result = await this.genreModel.create(genreDTO);
        this.logger.info(`New genre created: ${genreDTO.name}`);

        return result;
    }

    public async findByGenreId(genreId: string): Promise<DocumentType<GenreEntity> | null> {
        return this.genreModel.findById(genreId).exec();
    }

    public async findByGenreName(genreName: string): Promise<DocumentType<GenreEntity> | null> {
        return this.genreModel.findOne({name: genreName});
    }

    public async findByGenreNameOrCreateGenre(genreDTO: CreateGenreDTO): Promise<DocumentType<GenreEntity>> {
        const genreName = genreDTO.name;
        const existedGenre = await this.findByGenreName(genreName);

        if (existedGenre) {
            return existedGenre;
        }

        return this.create(genreDTO);
    }

    public async find(objectRequest: any, options?: any): Promise<any> {
        if (options) {
            if (options.populate) {
                const {path, model} = options;

                return await this.genreModel.find(objectRequest).populate({
                    path: path,
                    model: model ?? '',
                });
                
                // return await this.genreModel.find(objectRequest).populate(['filmsList']);
                // const aaa = await this.genreModel.find(objectRequest).populate(['filmsList']);
                // console.log(aaa);

                // return aaa;
            }
        }

        return await this.genreModel.find(objectRequest);
    }

    public async findGenreByNameAndUpdateFilmsListFromCurrentGenre(genreName: string, filmId: Types.ObjectId | undefined): Promise<DocumentType<GenreEntity>> {
        const createGenreDTO: CreateGenreDTO = {
            name: genreName,
        };
        
        const genreObj = await this.findByGenreNameOrCreateGenre(createGenreDTO);

        await genreObj?.filmsList.push(filmId);
        return await genreObj?.save();
    }

    public async findGenreByNameAndDeleteFilmFromCurrentGenre(genreName: string, filmId: string): Promise<DocumentType<GenreEntity> | undefined> {
        const genreObj = await this.findByGenreName(genreName);

        const index = genreObj?.filmsList.findIndex((item) => item?._id.toString() === filmId);
        
        if (index === undefined) {
            return index;
        }

        await genreObj?.filmsList.splice(index, 1);
        return await genreObj?.save();
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
