import { Expose, Type } from "class-transformer";
import { GenreType } from "../../../types/genre.type.js";

export class FilmDTOClassType {
    public id!: string;
    public title!: string;
    public description!: string;
	public postDate!: Date;
	public genre!: GenreType;
	public releaseYear!: number;   // МОЖЕТ БЫТЬ ТИП Date
	public rating!: number;
	public previewVideo!: string;   // Может быть тип данных что то по типу URL
	public video!: string;   //  Может быть тип данных что то по типу URL
	public actors!: string[];
	public director!: string[];
	public duration!: number;   // В МИНУТАХ!!!
	public commentsCount!: number;
	public userUrl!: string;   // Может быть тип данных что то по типу URL
	public poster!: string;   // Может быть тип данных что то по типу URL
	public backgroundImage!: string;   // Может быть тип данных что то по типу URL
	public backgroundColor!:  string;   // Может быть тип данных что то по типу URL
}

export default class TestGenreDTO {
    @Expose()
    public id!: string;

    @Expose()
    public name!: string;

    @Expose({name: 'filmsList'})
    @Type(() => FilmDTOClassType)
    public filmsList!: FilmDTOClassType[];
}
