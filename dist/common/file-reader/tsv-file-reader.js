import { readFileSync } from "fs";
export default class TSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.rawData = '';
    }
    read() {
        this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
    }
    toArray() {
        if (!this.rawData) {
            return [];
        }
        return this.rawData
            .split('\n')
            .filter(row => row.trim() !== '')
            .map((line) => line.split('\t'))
            .map(([title, description, postData, genre, releaseYear, rating, previewVideo, video, actors, director, duration, commentsCount, userUrl, poster, backgroundImage, backgroundColor]) => ({
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
        }));
    }
}
//# sourceMappingURL=tsv-file-reader.js.map