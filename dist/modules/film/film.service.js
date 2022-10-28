import { __decorate, __metadata, __param } from "tslib";
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { Component } from '../../types/component.types.js';
let FilmService = class FilmService {
    constructor(logger, filmModel) {
        this.logger = logger;
        this.filmModel = filmModel;
    }
    async create(dto) {
        const result = await this.filmModel.create(dto);
        this.logger.info(`New film created ${dto.title}`);
        return result;
    }
    async findById(filmId) {
        return await this.filmModel.findById(filmId).exec();
    }
    async findByFilmName(filmName) {
        return await this.filmModel.findOne({ title: filmName });
    }
    async findFilms(options) {
        if (options) {
            if (options.filmsCount) {
                return await this.filmModel.aggregate([
                    { $sort: { postDate: -1 } },
                    { $limit: options.filmsCount }
                ]);
            }
        }
        return await this.filmModel.find().sort({ postDate: -1 });
    }
};
FilmService = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.FilmModel)),
    __metadata("design:paramtypes", [Object, Object])
], FilmService);
export default FilmService;
//# sourceMappingURL=film.service.js.map