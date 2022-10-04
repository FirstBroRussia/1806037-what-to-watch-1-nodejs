import typegoose, { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
export interface GenreEntity extends Base {
}
export declare class GenreEntity extends TimeStamps {
    name: string;
    filmsId: Ref<GenreEntity>[];
    constructor(genre: string);
}
export declare const GenreModel: typegoose.types.ReturnModelType<typeof GenreEntity, typegoose.types.BeAnObject>;
