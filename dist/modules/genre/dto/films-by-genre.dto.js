export const filmsByGenreDTO = (plainObject) => {
    return {
        id: plainObject._id,
        name: plainObject.name,
        filmsList: plainObject.filmsList
    };
};
//# sourceMappingURL=films-by-genre.dto.js.map