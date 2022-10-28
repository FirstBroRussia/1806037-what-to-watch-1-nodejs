import { __decorate, __metadata, __param } from "tslib";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.types.js";
let GenreService = class GenreService {
    constructor(logger, genreModel) {
        this.logger = logger;
        this.genreModel = genreModel;
    }
    async create(genreDTO) {
        const result = await this.genreModel.create(genreDTO);
        this.logger.info(`New genre created: ${genreDTO.name}`);
        return result;
    }
    async findByGenreId(genreId) {
        return this.genreModel.findById(genreId).exec();
    }
    async findByGenreName(genreName) {
        return this.genreModel.findOne({ name: genreName });
    }
    async findByGenreNameOrCreateGenre(genreDTO) {
        const genreName = genreDTO.name;
        const existedGenre = await this.findByGenreName(genreName);
        if (existedGenre) {
            return existedGenre;
        }
        return this.create(genreDTO);
    }
    async find(objectRequest, options) {
        if (options) {
            if (options.populate) {
                const { path, model } = options;
                // return await this.genreModel.find(objectRequest).populate({
                //     path: path, 
                //     model: model ?? '',
                // });
                return await this.genreModel.find(objectRequest).populate({
                    path: path,
                    model: model ?? '',
                });
            }
        }
        return await this.genreModel.find(objectRequest);
    }
    async findByGenreNameAndDeleteFilmFromFilmsList(genreName, filmId) {
        const genre = await this.findByGenreName(genreName);
        const result = await genre?.deleteOne({ _id: filmId });
        return result;
    }
};
GenreService = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.GenreModel)),
    __metadata("design:paramtypes", [Object, Object])
], GenreService);
export default GenreService;
//# sourceMappingURL=genre.service.js.map