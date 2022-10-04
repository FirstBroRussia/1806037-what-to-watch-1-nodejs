#!/usr/bin/env node
import { Container } from "inversify";
import Application from "./app/application.js";
import ConfigService from "./common/config/config.service.js";
import DatabaseService from "./common/database-client/database.service.js";
import LoggerService from "./common/logger/logger.service.js";
import { FilmModel } from "./modules/film/film.entity.js";
import FilmService from "./modules/film/film.service.js";
import { GenreModel } from "./modules/genre/genre.entity.js";
import GenreService from "./modules/genre/genre.service.js";
import { UserModel } from "./modules/user/user.entity.js";
import UserService from "./modules/user/user.service.js";
import { Component } from "./types/component.types.js";
const applicationContainer = new Container();
applicationContainer.bind(Component.Application).to(Application).inSingletonScope();
applicationContainer.bind(Component.LoggerInterface).to(LoggerService).inSingletonScope();
applicationContainer.bind(Component.ConfigInterface).to(ConfigService).inSingletonScope();
applicationContainer.bind(Component.DatabaseInterface).to(DatabaseService).inSingletonScope();
applicationContainer.bind(Component.UserServiceInterface).to(UserService).inSingletonScope();
applicationContainer.bind(Component.UserModel).toConstantValue(UserModel);
applicationContainer.bind(Component.GenreModel).toConstantValue(GenreModel);
applicationContainer.bind(Component.GenreServiceInterface).to(GenreService).inSingletonScope();
applicationContainer.bind(Component.FilmServiceInterface).to(FilmService).inSingletonScope();
applicationContainer.bind(Component.FilmModel).toConstantValue(FilmModel);
const application = applicationContainer.get(Component.Application);
await application.init();
//# sourceMappingURL=main.js.map