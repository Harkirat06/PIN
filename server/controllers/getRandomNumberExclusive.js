function getRandomNumberExclusive(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min)) + min;
    return randomNumber;
}
exports.getRandomNumberExclusive = getRandomNumberExclusive;
