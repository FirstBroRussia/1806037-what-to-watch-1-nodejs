import { GenreType } from "../../../types/genre.type.js";

export default class CreateFilmDTO {
    public title!: string;
	public description!: string;
	public postDate!: Date;
	public genre!: GenreType;
	public releaseYear!: number; 
	public rating!: number;
	public previewVideo!: string;
	public video!: string;
	public actors!: string[];
	public director!: string[];
	public duration!: number;
	public commentsCount!: number;
	public userUrl!: string;
	public poster!: string;
	public backgroundImage!: string;
	public backgroundColor!:  string;
	// public userId!: string;
}
