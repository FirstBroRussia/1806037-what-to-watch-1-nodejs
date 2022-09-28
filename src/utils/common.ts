export const createFilmItem = (row: string) => {
	const tokens = row.replace('\n', ' ').replace('\r', '').split('\t');
	const [title, description, postData, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor] = tokens;

		return {
			title,
			description,
			postData: new Date(postData),
			genre,
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

export const getErrorMessage = (error: unknown): string => {
	return error instanceof Error ? error.message : '';
};
