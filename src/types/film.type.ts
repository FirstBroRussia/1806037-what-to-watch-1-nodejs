/* eslint-disable node/no-unsupported-features/es-syntax */
import { GenresType } from './genres.type.js';

export type FilmType = {
  title: string,
  description: string,
  publicationDate: Date,
  genre: GenresType,
  releasedYear: number,
  rating: number,
  previewVideoLink: string,
  videoLink: string,
  actors: string,
  director: string,
  duration: number,
  commentsCount: number,
  user: string,
  poster: string,
  backgroundImage: string,
  backgroundColor: string,
};
