import dayjs from 'dayjs';

import { OfferGeneratorInterface } from "./offer-generator.interface.js"; // СОЗДАТЬ ТИП ДЛЯ МОКОВЫХ ДАННЫХ
import { generateRandomValue, getRandomItem, getRandomItems } from "../../../utils/random.js";
import { MockDataType } from "./mock-data.type.js";

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
	constructor(private readonly mockData: MockDataType) {}

	public generate(): string {
		const title = getRandomItem<string>(this.mockData.titles);
	    const description = getRandomItem<string>(this.mockData.descriptions);
		// const postData = dayjs().format(getRandomItem<string>(this.mockData.publicationDate));
		const postData = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day');
		const genre = getRandomItem<string>(this.mockData.genres);
		const releaseYear = Number(getRandomItem<string>(this.mockData.releasedYear));
		const rating = Number(getRandomItem<string>(this.mockData.ratings));
		const previewVideo = getRandomItem<string>(this.mockData.previewVideoLinks)
		const video = getRandomItem<string>(this.mockData.videoLinks);
		const actors = getRandomItems<string>(this.mockData.actors).join(', ');
		const director = getRandomItem<string>(this.mockData.directors);
		const duration = getRandomItem<string>(this.mockData.durationsFilms);
		const commentsCount = Number(getRandomItem<string>(this.mockData.commentsCounts));
		const userUrl = getRandomItem<string>(this.mockData.usersLinks);
		const poster = getRandomItem<string>(this.mockData.posters);
		const backgroundImage = getRandomItem<string>(this.mockData.backgroundsImages);
		const backgroundColor = getRandomItem<string>(this.mockData.backgroundsColors);

		return [
			title,
			description,
			postData,
			genre,
			releaseYear,
			rating,
			previewVideo,
			video,
			actors,
			director,
			duration,
			commentsCount,
			userUrl,
			poster,
			backgroundImage,
			backgroundColor
		].join('\t');
	}
};
