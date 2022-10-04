export const generateRandomValue = (min, max, numAfterDigit = 0) => {
    return +(Math.random() * (max - min) + min).toFixed(numAfterDigit);
};
export const getRandomItems = (items) => {
    const startPosition = generateRandomValue(0, items.length - 1);
    const endPosition = startPosition + generateRandomValue(startPosition, items.length);
    return items.slice(startPosition, endPosition);
};
export const getRandomItem = (items) => {
    return items[generateRandomValue(0, items.length - 1)];
};
//# sourceMappingURL=random.js.map