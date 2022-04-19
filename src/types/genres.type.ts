/* eslint-disable node/no-unsupported-features/es-syntax */
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
}

export type GenresType = Genres.Comedy | Genres.Crime | Genres.Documentary | Genres.Drama | Genres.Family | Genres.Horror | Genres.Romance | Genres.SciFi | Genres.Thriller;
