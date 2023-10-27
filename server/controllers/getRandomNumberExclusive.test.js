const { getRandomNumberExclusive } = require("./getRandomNumberExclusive");

describe('getRandomNumberExclusive', () => {
  it('Deberia generar un número aleatorio dentro del rango especificado.', () => {
    const min = 0;
    const max = 10;
    const randomValue = getRandomNumberExclusive(min, max);
    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThan(max);
  });
});
