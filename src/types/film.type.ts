export type FilmType = {
	title: string,
	description: string,
	postData: Date,
	genre: string,
	releaseYear: number,   // МОЖЕТ БЫТЬ ТИП Date
	rating: number,
	previewVideo: string,   // Может быть тип данных что то по типу URL
	video: string,   //  Может быть тип данных что то по типу URL
	actors: string[],
	director: string[],
	duration: number,   // В МИНУТАХ!!!
	commentsCount: number,
	userUrl: string,   // Может быть тип данных что то по типу URL
	poster: string,   // Может быть тип данных что то по типу URL
	backgroundImage: string,   // Может быть тип данных что то по типу URL
	backgroundColor:  string,   // Может быть тип данных что то по типу URL
};
