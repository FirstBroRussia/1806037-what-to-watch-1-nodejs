import { DatabaseInterface } from '../common/database-client/database.interface.js';
import DatabaseService from '../common/database-client/database.service.js';
import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
import ConsoleLoggerService from '../common/logger/console-logger.service.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import { FilmServiceInterface } from '../modules/film/film-service.interface.js';
import { FilmModel } from '../modules/film/film.entity.js';
import FilmService from '../modules/film/film.service.js';
import CreateGenreDTO from '../modules/genre/dto/create-genre.dto.js';
import { GenreServiceInterface } from '../modules/genre/genre-service.interface.js';
import { GenreModel } from '../modules/genre/genre.entity.js';
import GenreService from '../modules/genre/genre.service.js';
import { Film } from '../types/film.type.js';
import { createFilmItem, getErrorMessage } from '../utils/common.js';
import { getURI } from '../utils/db.js';
import {CLICommandInterface} from './cli-command.interface.js';

const DEFAULT_DB_PORT = 27017;

export default class ImportCommand implements CLICommandInterface {
	public readonly name = '--import';
	private logger!: LoggerInterface;
	private databaseService!: DatabaseInterface;
	// private salt!: string;
	private filmService!: FilmServiceInterface;
	private genreService!: GenreServiceInterface;

	constructor() {
		this.onLine = this.onLine.bind(this);
		this.onComplete = this.onComplete.bind(this);

		this.logger = new ConsoleLoggerService();

		// ЗДЕСЬ НАДО РЕШИТЬ НАСЧЕТ ЖАНРОВ!!! СУЩНОСТЬ!!!

		this.filmService = new FilmService(this.logger, FilmModel);
		this.genreService = new GenreService(this.logger, GenreModel);
		this.databaseService = new DatabaseService(this.logger);
	}

	private async saveFilmToDatabase(film: Film) {
		//  ЗДЕСЬ НАДО СДЕЛАТЬ СОЗДАНИЕ СУЩНОСТИ ЖАНРОВ
		//  И ИХ ДОБАВИТЬ В ОБЪЕКТ С ФИЛЬМОМ

		const filmResult = await this.filmService.create(film);

		const createGenreDTO: CreateGenreDTO = {
			name: filmResult.genre,
		};

		await this.genreService.findByGenreNameAndUpdateFilmsIdOrCreateGenre(filmResult.genre, createGenreDTO, filmResult._id);

		// console.log(`New genre created and update filmsID array`);
	}

	private async onLine(line: string, resolve: () => void) {
		const film = createFilmItem(line);

		await this.saveFilmToDatabase(film);

		resolve();
	}

	private async onComplete(count: number) {
		console.log(`${count} rows imported.`);

		// const result = await this.filmService.findByGenreName('documentary');
		// console.log(result);

		await this.databaseService.disconnect();
	}

	// filename: string, login: string, password: string, host: string, dbname: string, salt: string
	public async execute(...parameters: string[]): Promise<void> {
		const [filename, login, password, host, dbname] = parameters;
		
		const uri = getURI(login, password, host, DEFAULT_DB_PORT, dbname);
		// this.salt = salt; // ИСПРАВИТЬ!!!

		await this.databaseService.connect(uri);
		
		const fileReader = new TSVFileReader(filename.trim());
		fileReader.on('line', this.onLine);
		fileReader.on('end', this.onComplete);

		try {
			await fileReader.read();
		} catch (err) {
			console.log(`Can't read the file: ${getErrorMessage(err)}`);
		}
	}
}
