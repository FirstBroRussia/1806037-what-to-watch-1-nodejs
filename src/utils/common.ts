import dayjs from 'dayjs';
import crypto from 'crypto';
import { Film } from '../types/film.type.js';
import { GenreType } from '../types/genre.type.js';

export const createFilmItem = (row: string): Film => {
	const tokens = row.replace('\n', ' ').replace('\r', '').split('\t');
	const [title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor] = tokens;

		return {
			title,
			description,
			postDate: dayjs(postDate).format() as unknown as Date,
			genre: genre as GenreType, // РЕШИТЬ ЭТУ ПРОБЛЕМУ ГЕНИАЛЬНЕЕ!!!
			releaseYear: Number(releaseYear),
			rating: Number(rating),
			previewVideo,
			video,
			actors: actors.split(', '),
			director: director.split(', '),
			duration: Number(duration),
			commentsCount: Number(commentsCount),
			userUrl,
			poster,
			backgroundImage,
			backgroundColor,
		};
};

export const desSortArrayByTime = <T>(array: Array<T>, options?: any): Array<T> => {
	if (options) {
		if (options.targetSortField) {
			return array.sort((itemA: any, itemB: any) => {
				const timeA = +dayjs(itemA[options.targetSortField]);
				const timeB = +dayjs(itemB[options.targetSortField]);
		
				return timeB - timeA;
			});
		}
	}

	return array.sort((itemA: any, itemB: any) => {
		const timeA = +dayjs(itemA);
		const timeB = +dayjs(itemB);

		return timeB - timeA;
	});
};

export const getErrorMessage = (error: unknown): string => {
	return error instanceof Error ? error.message : '';
};

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  
  return shaHasher.update(line).digest('hex');
};

export const createErrorObject = (message: string) => ({
	error: message,
});
