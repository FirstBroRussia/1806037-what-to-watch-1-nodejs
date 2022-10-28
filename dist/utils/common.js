import dayjs from 'dayjs';
import crypto from 'crypto';
export const createFilmItem = (row) => {
    const tokens = row.replace('\n', ' ').replace('\r', '').split('\t');
    const [title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor] = tokens;
    return {
        title,
        description,
        postDate: dayjs(postDate).format(),
        genre: genre,
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
export const desSortArrayByTime = (array, options) => {
    if (options) {
        if (options.targetSortField) {
            return array.sort((itemA, itemB) => {
                const timeA = +dayjs(itemA[options.targetSortField]);
                const timeB = +dayjs(itemB[options.targetSortField]);
                return timeB - timeA;
            });
        }
    }
    return array.sort((itemA, itemB) => {
        const timeA = +dayjs(itemA);
        const timeB = +dayjs(itemB);
        return timeB - timeA;
    });
};
export const getErrorMessage = (error) => {
    return error instanceof Error ? error.message : '';
};
export const createSHA256 = (line, salt) => {
    const shaHasher = crypto.createHmac('sha256', salt);
    return shaHasher.update(line).digest('hex');
};
export const createErrorObject = (message) => ({
    error: message,
});
//# sourceMappingURL=common.js.map