export enum Genres {
	Comedy = 'comedy',
	Crime = 'crime',
	Documentary = 'documentary',
	Drama = 'drama',
	Horror = 'horror',
	Family = 'family',
	Romance = 'romance',
	SciFi = 'scifi',
	Thriller = 'thriller'
};

export type Genre = {
	Comedy: 'comedy',
	Crime: 'crime',
	Documentary: 'documentary',
	Drama: 'drama',
	Horror: 'horror',
	Family: 'family',
	Romance: 'romance',
	SciFi: 'scifi',
	Thriller: 'thriller'
};
  
export type GenreType = keyof Genre;
