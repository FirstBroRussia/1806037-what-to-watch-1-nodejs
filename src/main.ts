#!/usr/bin/env node

import { ModelType } from "@typegoose/typegoose/lib/types.js";
import { Container } from "inversify";
import Application from "./app/application.js";
import { ConfigInterface } from "./common/config/config.interface.js";
import ConfigService from "./common/config/config.service.js";
import { ControllerInterface } from "./common/controllers/controller.interface.js";
import FilmController from "./common/controllers/film-controller/film.controller.js";
import UserController from "./common/controllers/user-controller/user.controller.js";
import { DatabaseInterface } from "./common/database-client/database.interface.js";
import DatabaseService from "./common/database-client/database.service.js";
import { ExceptionFilterInterface } from "./common/errors/exception-filter.interface.js";
import ExceptionFilter from "./common/errors/exception-filter.js";
import { LoggerInterface } from "./common/logger/logger.interface.js";
import LoggerService from "./common/logger/logger.service.js";
import { FilmServiceInterface } from "./modules/film/film-service.interface.js";
import { FilmEntity, FilmModel } from "./modules/film/film.entity.js";
import FilmService from "./modules/film/film.service.js";
import { GenreServiceInterface } from "./modules/genre/genre-service.interface.js";
import { GenreEntity, GenreModel } from "./modules/genre/genre.entity.js";
import GenreService from "./modules/genre/genre.service.js";
import { UserServiceInterface } from "./modules/user/user-service.interface.js";
import { UserEntity, UserModel } from "./modules/user/user.entity.js";
import UserService from "./modules/user/user.service.js";
import { Component } from "./types/component.types.js";

const applicationContainer = new Container();
applicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService).inSingletonScope();
applicationContainer.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService).inSingletonScope();
applicationContainer.bind<DatabaseInterface>(Component.DatabaseInterface).to(DatabaseService).inSingletonScope();
applicationContainer.bind<UserServiceInterface>(Component.UserServiceInterface).to(UserService).inSingletonScope();
applicationContainer.bind<ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);
applicationContainer.bind<ModelType<GenreEntity>>(Component.GenreModel).toConstantValue(GenreModel);
applicationContainer.bind<GenreServiceInterface>(Component.GenreServiceInterface).to(GenreService).inSingletonScope();
applicationContainer.bind<FilmServiceInterface>(Component.FilmServiceInterface).to(FilmService).inSingletonScope();
applicationContainer.bind<ModelType<FilmEntity>>(Component.FilmModel).toConstantValue(FilmModel);
applicationContainer.bind<ControllerInterface>(Component.FilmController).to(FilmController).inSingletonScope();
applicationContainer.bind<ControllerInterface>(Component.UserController).to(UserController).inSingletonScope();
applicationContainer.bind<ExceptionFilterInterface>(Component.ExceptionFilterInterface).to(ExceptionFilter).inSingletonScope();

const application = applicationContainer.get<Application>(Component.Application);
await application.init();
