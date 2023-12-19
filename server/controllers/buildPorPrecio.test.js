const { buildPorPrecio } = require("./buildPorPrecio");

describe("buildPorPrecio function", () => {
  describe('buildPorPrecio', () => {
    it('Debería devolver un error si el presupuesto es 0 o negativo', () => {
      const result = buildPorPrecio({}, -100);
      expect(result).toEqual({ "Error": "El presupuesto es 0 o negativo" });
    });
  
    it('Debería devolver un error si no se puede encontrar una build por el presupuesto especificado', () => {
      const result = buildPorPrecio({},100);
      expect(result).toEqual({ "Error": "No se ha podido encontrar una build por el presupuesto especificado" });
    });
  
    it('Debería devolver una configuración por precio válida', () => {
      const result = buildPorPrecio({}, 2000);
      expect(result).toHaveProperty('placas');
      expect(result).toHaveProperty('cpu');
      expect(result).toHaveProperty('ram');
      expect(result).toHaveProperty('gpu');
      expect(result).toHaveProperty('fuente');
      expect(result).toHaveProperty('sata');
      expect(result).toHaveProperty('caja');
      expect(result).toHaveProperty('monitor');
      expect(result).toHaveProperty('raton');
      expect(result).toHaveProperty('teclado');
      
    });
  });
});
