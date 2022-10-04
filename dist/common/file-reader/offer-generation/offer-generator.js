import dayjs from 'dayjs';
import { generateRandomValue, getRandomItem, getRandomItems } from "../../../utils/random.js";
const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
export default class OfferGenerator {
    constructor(mockData) {
        this.mockData = mockData;
    }
    generate() {
        const title = getRandomItem(this.mockData.titles);
        const description = getRandomItem(this.mockData.descriptions);
        // const postData = dayjs().format(getRandomItem<string>(this.mockData.publicationDate));
        const postData = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day');
        const genre = getRandomItem(this.mockData.genres);
        const releaseYear = Number(getRandomItem(this.mockData.releasedYear));
        const rating = Number(getRandomItem(this.mockData.ratings));
        const previewVideo = getRandomItem(this.mockData.previewVideoLinks);
        const video = getRandomItem(this.mockData.videoLinks);
        const actors = getRandomItems(this.mockData.actors).join(', ');
        const director = getRandomItem(this.mockData.directors);
        const duration = getRandomItem(this.mockData.durationsFilms);
        const commentsCount = Number(getRandomItem(this.mockData.commentsCounts));
        const userUrl = getRandomItem(this.mockData.usersLinks);
        const poster = getRandomItem(this.mockData.posters);
        const backgroundImage = getRandomItem(this.mockData.backgroundsImages);
        const backgroundColor = getRandomItem(this.mockData.backgroundsColors);
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
}
;
//# sourceMappingURL=offer-generator.js.map