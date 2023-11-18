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
          'tamaño': 'ATX',                                      
          socket: 'Intel LGA 1700',                             
          tipoRam: 'DDR5',                                      
          gama: 'Alta',                                         
          numeroM2: 2,                                          
          numeroSata: 2,                                        
          precio: { segundaMano: 100, amazon: 150, ebay: 200 }, 
          imagen: 'placa.jpg'                                   
        },
      }, 2000, false);
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

    it('Debería devolver una configuración por precio válida donde todos los componentes tienen la misma gama', () => {
      const result = buildPorPrecio({}, 2000, false);

      expect(result).toHaveProperty('placas');
      expect(result.placas.gama).toBeDefined();
      
      expect(result).toHaveProperty('cpu');
      expect(result.cpu.gama).toBeDefined();
      expect(result.cpu.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('ram');
      expect(result.ram.gama).toBeDefined();
      expect(result.ram.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('gpu');
      expect(result.gpu.gama).toBeDefined();
      expect(result.gpu.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('disiapdor');
      expect(result.disipador.gama).toBeDefined();
      expect(result.disipador.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('fuente');
      expect(result.fuente.gama).toBeDefined();
      expect(result.fuente.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('m2');
      expect(result.m2.gama).toBeDefined();
      expect(result.m2.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('sata');
      expect(result.sata.gama).toBeDefined();
      expect(result.sata.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('caja');
      expect(result.caja.gama).toBeDefined();
      expect(result.caja.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('monitor');
      expect(result.monitor.gama).toBeDefined();
      expect(result.monitor.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('raton');
      expect(result.raton.gama).toBeDefined();
      expect(result.raton.gama).toEqual(result.placas.gama);

      expect(result).toHaveProperty('teclado');
      expect(result.teclado.gama).toBeDefined();
      expect(result.teclado.gama).toEqual(result.placas.gama);
    });
  });
});
