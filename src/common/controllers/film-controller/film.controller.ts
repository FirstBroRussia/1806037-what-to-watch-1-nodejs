import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import { Controller } from "../controller.js";
import { LoggerInterface } from "../../logger/logger.interface.js";
import { Component } from "../../../types/component.types.js";
import { HttpMethod } from "../../../types/http-method.enum.js";
import { GenreServiceInterface } from "../../../modules/genre/genre-service.interface.js";
import { FilmServiceInterface } from "../../../modules/film/film-service.interface.js";
import { Film } from "../../../types/film.type.js";
import { desSortArrayByTime } from "../../../utils/common.js";
import { filmsByGenreDTO } from "../../../modules/genre/dto/films-by-genre.dto.js";
import { filmShortInfoDTO } from "../../../modules/film/dto/film-short-info.dto.js";
import CreateGenreDTO from "../../../modules/genre/dto/create-genre.dto.js";
import { filmFullInfoDTO } from "../../../modules/film/dto/film-full-info.dto.js";
import CreateFilmDTO from "../../../modules/film/dto/create-film.dto.js";
import HttpError from "../../errors/http-error.js";
// import { filmFullInfoDTO } from "../../../modules/film/dto/film-full-info.dto.js";

// import { mongoose } from "@typegoose/typegoose";

// export type FilmsListByGenre = {
//     _id: mongoose.ObjectId,
//     name: string,
//     filmsList: any,
//     createdAt: string,
//     updateAt: string,
//     __v: number,
// };

const DEFAULT_COUNT_FILM = 60;

@injectable()
export default class FilmController extends Controller {
    constructor(
        @inject(Component.LoggerInterface) logger: LoggerInterface,
        @inject(Component.FilmServiceInterface) private readonly filmService: FilmServiceInterface,
        @inject(Component.GenreServiceInterface) private readonly genreService: GenreServiceInterface,
        ) {
        super(logger);

        this.logger.info('Register routes for FilmController...');

        this.addRoute({path: '/', method: HttpMethod.Get, handler: this.index});
        this.addRoute({path: '/?genre=:genre', method: HttpMethod.Get, handler: this.index});
        this.addRoute({path: '/?count=:count', method: HttpMethod.Get, handler: this.index});
        this.addRoute({path: '/?genre=:genre&&count=:count', method: HttpMethod.Get, handler: this.index});
        this.addRoute({path: '/', method: HttpMethod.Post, handler: this.create});
    }

    public async index(req: Request, res: Response): Promise<void> {
        if (req.query['genre'] && req.query['count']) {
            // Получение списка фильмов и по жанру и определенного количества

            const genre = String(req.query['genre']);
            const filmsCount = +req.query['count'];
            const filmsByGenreObj = await this.genreService.find({ name: genre }, { populate: true, path: 'filmsList', model: 'FilmEntity' });
            const filmsGenreDto = filmsByGenreDTO(filmsByGenreObj[0]);
            const desSortFilms = desSortArrayByTime<Film>(filmsGenreDto.filmsList, {targetSortField: 'postDate'});
            const films = desSortFilms.slice(0, filmsCount);
            const convertFilms = films.map((item) => {
                return filmShortInfoDTO(item);
            });

            this.send(res, StatusCodes.OK, convertFilms);

            return;
        }
        if (req.query['genre']) {
            // Получение списка фильмов по жанру

            const genre = String(req.query['genre']);
            const filmsByGenreObj = await this.genreService.find({ name: genre }, { populate: true, path: 'filmsList', model: 'FilmEntity' });
            // const filmsByGenre = (await filmsByGenreObj[0]).filmsList as unknown as Film[];
            const filmsGenreDto = filmsByGenreDTO(filmsByGenreObj[0]);
            const desSortFilms = desSortArrayByTime<Film>(filmsGenreDto.filmsList, {targetSortField: 'postDate'});
            const films = desSortFilms.slice(0, DEFAULT_COUNT_FILM);
            const convertFilms = films.map((item) => {
                return filmShortInfoDTO(item);
            });

            this.send(res, StatusCodes.OK, convertFilms);

            return;
        } 
        if (req.query['count']) {
            // Получение списка фильмов определенного количества

            const filmsCount = +req.query['count'];
            const films = await this.filmService.findFilms({filmsCount: filmsCount});
            const convertFilms = films?.map((item) => {
                return filmShortInfoDTO(item);
            });

            this.send(res, StatusCodes.OK, convertFilms);

            return;
        } else {
            // Получение всех фильмов

            const films = await this.filmService.findFilms({filmsCount: DEFAULT_COUNT_FILM});
            // const convertFilms = films?.map((item) => {
            //     return filmShortInfoDTO(item);
            // });

            this.send(res, StatusCodes.OK, films);
        }
    }

    public async create(req: Request<Record<string, unknown>, Record<string, unknown>, CreateFilmDTO>, res: Response): Promise<void> {
        const newFilm = req.body;
        const existFilm = await this.filmService.findByFilmName(newFilm.title);

        if (existFilm) {
            throw new HttpError(
                StatusCodes.CONFLICT,
                `Film with name «${newFilm.title}» exists.`,
                'FilmController'
            );
        }

        const createGenreDTO: CreateGenreDTO = {
			name: newFilm.genre,
		};
		const genre = await this.genreService.findByGenreNameOrCreateGenre(createGenreDTO);
		const filmResult = await this.filmService.create(newFilm);

		await genre.filmsList.push(filmResult);
		await genre.save();

        this.send(res, StatusCodes.CREATED, filmFullInfoDTO(filmResult));
    }

}
