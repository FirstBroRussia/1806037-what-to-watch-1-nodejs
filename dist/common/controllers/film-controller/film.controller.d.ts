import { Request, Response } from "express";
import { Controller } from "../controller.js";
import { LoggerInterface } from "../../logger/logger.interface.js";
import { GenreServiceInterface } from "../../../modules/genre/genre-service.interface.js";
import { FilmServiceInterface } from "../../../modules/film/film-service.interface.js";
import CreateFilmDTO from "../../../modules/film/dto/create-film.dto.js";
export default class FilmController extends Controller {
    private readonly filmService;
    private readonly genreService;
    constructor(logger: LoggerInterface, filmService: FilmServiceInterface, genreService: GenreServiceInterface);
    index(req: Request, res: Response): Promise<void>;
    create(req: Request<Record<string, unknown>, Record<string, unknown>, CreateFilmDTO>, res: Response): Promise<void>;
}
