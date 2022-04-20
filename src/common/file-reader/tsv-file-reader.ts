/* eslint-disable node/no-unsupported-features/es-syntax */
import { readFileSync } from 'fs';
import { FilmType } from 'src/types/film.type.js';
import { GenresType } from 'src/types/genres.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, {encoding: 'utf-8'});

  }

  public toArray(): FilmType[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, publicationDate, genre, releasedYear, rating, previewVideoLink, videoLink, actors, director, duration, commentsCount, user, poster, backgroundImage, backgroundColor]) => (
        {
          title,
          description,
          publicationDate: new Date(publicationDate),
          genre: genre as GenresType,
          releasedYear: Number(releasedYear),
          rating: Number(rating),
          previewVideoLink,
          videoLink,
          actors,
          director,
          duration: Number(duration),
          commentsCount: Number(commentsCount),
          user,
          poster,
          backgroundImage,
          backgroundColor
        }
      ));
  }

}
