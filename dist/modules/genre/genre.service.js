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
        return this.genreModel.findOne({ name: genreName }).exec();
    }
    async findByGenreNameOrCreate(genreName, genreDTO) {
        const existedGenre = await this.findByGenreName(genreName);
        if (existedGenre) {
            return existedGenre;
        }
        return this.create(genreDTO);
    }
    async find() {
        return await this.genreModel.find();
    }
    async findByGenreNameAndUpdateFilmsIdOrCreateGenre(genreName, genreDTO, filmId) {
        const genre = await this.findByGenreNameOrCreate(genreName, genreDTO);
        const result = await this.genreModel.findOneAndUpdate({ name: genreName }, { filmsId: [...genre.filmsId, filmId] }, { new: true }).exec();
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