const { buildPorPrecio } = require("./buildPorPrecio");

describe("buildPorPrecio function", () => {
  describe('buildPorPrecio', () => {
    it('Debería devolver un error si el presupuesto es 0 o negativo', () => {
      const result = buildPorPrecio({}, -100, false);
      expect(result).toEqual({ "Error": "El presupuesto es 0 o negativo" });
    });
  
    it('Debería devolver un error si no se puede encontrar una build por el presupuesto especificado', () => {
      const result = buildPorPrecio({},100, false);
      expect(result).toEqual({ "Error": "No se ha podido encontrar una build por el presupuesto especificado" });
    });
  
    it('Debería devolver una configuración por precio válida', () => {
      const result = buildPorPrecio({
        placas: {                                               
          marca: 'Asus',                                        
          nombre: 'Prueba de que le he pasado cosas antes',                                                           
          socket: 'Intel LGA 1700',                             
          tipoRam: 'DDR5',                                      
          gama: 'Alta',                                         
          numeroM2: 2,                                          
          numeroSata: 2,                                        
          precio: { segundaMano: 100, amazon: 150, ebay: 200 }, 
          imagen: 'placa.jpg'                                   
        },
      }, 2000, true);
      expect(result).toHaveProperty('placas');
      expect(result).toHaveProperty('cpu');
      expect(result).toHaveProperty('ram');
      expect(result).toHaveProperty('gpu');
      expect(result).toHaveProperty('fuente');
      expect(result).toHaveProperty('m2');
      expect(result).toHaveProperty('sata');
      expect(result).toHaveProperty('caja');
      expect(result).toHaveProperty('monitor');
      expect(result).toHaveProperty('raton');
      expect(result).toHaveProperty('teclado');
    });
  });
});
