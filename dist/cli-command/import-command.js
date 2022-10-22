import DatabaseService from '../common/database-client/database.service.js';
import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
import ConsoleLoggerService from '../common/logger/console-logger.service.js';
import { FilmModel } from '../modules/film/film.entity.js';
import FilmService from '../modules/film/film.service.js';
import { GenreModel } from '../modules/genre/genre.entity.js';
import GenreService from '../modules/genre/genre.service.js';
import { createFilmItem, getErrorMessage } from '../utils/common.js';
import { getURI } from '../utils/db.js';
const DEFAULT_DB_PORT = 27017;
export default class ImportCommand {
    constructor() {
        this.name = '--import';
        this.onLine = this.onLine.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.logger = new ConsoleLoggerService();
        // ЗДЕСЬ НАДО РЕШИТЬ НАСЧЕТ ЖАНРОВ!!! СУЩНОСТЬ!!!
        this.filmService = new FilmService(this.logger, FilmModel);
        this.genreService = new GenreService(this.logger, GenreModel);
        this.databaseService = new DatabaseService(this.logger);
    }
    async saveFilmToDatabase(film) {
        //  ЗДЕСЬ НАДО СДЕЛАТЬ СОЗДАНИЕ СУЩНОСТИ ЖАНРОВ
        //  И ИХ ДОБАВИТЬ В ОБЪЕКТ С ФИЛЬМОМ
        const filmResult = await this.filmService.create(film);
        const createGenreDTO = {
            name: filmResult.genre,
        };
        await this.genreService.findByGenreNameAndUpdateFilmsIdOrCreateGenre(filmResult.genre, createGenreDTO, filmResult._id);
        // console.log(`New genre created and update filmsID array`);
    }
    async onLine(line, resolve) {
        const film = createFilmItem(line);
        await this.saveFilmToDatabase(film);
        resolve();
    }
    async onComplete(count) {
        console.log(`${count} rows imported.`);
        // const result = await this.filmService.findByGenreName('documentary');
        // console.log(result);
        await this.databaseService.disconnect();
    }
    // filename: string, login: string, password: string, host: string, dbname: string, salt: string
    async execute(...parameters) {
        const [filename, login, password, host, dbname] = parameters;
        const uri = getURI(login, password, host, DEFAULT_DB_PORT, dbname);
        // this.salt = salt; // ИСПРАВИТЬ!!!
        await this.databaseService.connect(uri);
        const fileReader = new TSVFileReader(filename.trim());
        fileReader.on('line', this.onLine);
        fileReader.on('end', this.onComplete);
        try {
            await fileReader.read();
        }
        catch (err) {
            console.log(`Can't read the file: ${getErrorMessage(err)}`);
        }
    }
}
//# sourceMappingURL=import-command.js.map