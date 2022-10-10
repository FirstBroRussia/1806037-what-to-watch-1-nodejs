import crypto from 'crypto';
export const createFilmItem = (row) => {
    const tokens = row.replace('\n', ' ').replace('\r', '').split('\t');
    const [title, description, postData, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor] = tokens;
    return {
        title,
        description,
        postData: new Date(postData),
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
export const getErrorMessage = (error) => {
    return error instanceof Error ? error.message : '';
};
export const createSHA256 = (line, salt) => {
    const shaHasher = crypto.createHmac('sha256', salt);
    return shaHasher.update(line).digest('hex');
};
//# sourceMappingURL=common.js.map