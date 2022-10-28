import typegoose, { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { FilmEntity } from '../film/film.entity.js';
export interface GenreEntity extends Base {
}
export declare class GenreEntity extends TimeStamps {
    name: string;
    filmsList: Ref<FilmEntity>[];
    constructor(genre: string);
}
export declare const GenreModel: typegoose.types.ReturnModelType<typeof GenreEntity, typegoose.types.BeAnObject>;
