import typegoose, {getModelForClass, Ref} from '@typegoose/typegoose';
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses.js";
import { GenreType } from '../../types/genre.type.js';
import { FilmEntity } from '../film/film.entity.js';

const {prop, modelOptions} = typegoose;

export interface GenreEntity extends Base {}

@modelOptions({
    schemaOptions: {
        collection: 'genres',
    }
})
export class GenreEntity extends TimeStamps {
    @prop({
        required: true,
        trim: true,
        type: () => String,
        enum: GenreType,
    })
    public name!: string;

    @prop({
        required: true,
        ref: GenreEntity,
    })
    public filmsList!: Ref<FilmEntity>[];

    constructor(genre: string) {
        super();

        this.name = genre;
    }
}

export const GenreModel = getModelForClass(GenreEntity);
