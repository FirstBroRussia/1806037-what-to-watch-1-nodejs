export const filmFullInfoDTO = (plainObject) => {
    const { title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor } = plainObject;
    return { title, description, postDate, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor };
};
//# sourceMappingURL=film-full-info.dto.js.map