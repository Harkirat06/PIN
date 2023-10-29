const { buildPorPrecio } = require("./buildPorPrecio");

describe('buildPorPrecio function', () => {
    it('should return an empty configuration for zero budget', () => {
      const result = buildPorPrecio(0);
      expect(result).toEqual({});
    });
  
    it('should return a configuration within the budget for a normal scenario', () => {
      const result = buildPorPrecio(1500);
      // Add your assertions here to validate the expected result
      // For instance, check if the resulting configuration is within the budget
      // expect(result.someProperty).toBe(someValue);
    });
  
    it('should handle second-hand parts and return a configuration within the budget', () => {
      const result = buildPorPrecio(2000, true);
      // Add assertions to validate if second-hand parts are correctly handled and within budget
      // expect(result.someProperty).toBe(someValue);
    });
  
    // Add more test cases to cover edge cases, budget extremes, etc.
  });