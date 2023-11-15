const { buildPorPrecio } = require("./buildPorPrecio");

describe("buildPorPrecio function", () => {

  const expectedConfiguration = {
    placasList: [{ precio: { amazon: 200, ebay: 180, segundaMano: 150 } }],
    cpuList: [{ precio: { amazon: 300, ebay: 280, segundaMano: 250 } }],
    disipadorList: [{ precio: { amazon: 50, ebay: 40, segundaMano: 30 } }],
    ramList: [{ precio: { amazon: 150, ebay: 130, segundaMano: 100 } }],
    discoList: [{ precio: { amazon: 100, ebay: 90, segundaMano: 80 } }],
    gpuList: [{ precio: { amazon: 400, ebay: 380, segundaMano: 350 } }],
    fuenteList: [{ precio: { amazon: 80, ebay: 70, segundaMano: 60 } }],
    cajaList: [{ precio: { amazon: 70, ebay: 60, segundaMano: 50 } }],
    monitorList: [{ precio: { amazon: 200, ebay: 180, segundaMano: 150 } }],
    tecladoList: [{ precio: { amazon: 30, ebay: 25, segundaMano: 20 } }],
    ratonList: [{ precio: { amazon: 20, ebay: 18, segundaMano: 15 } }],
  };

  const presupuestoSuficiente = 1500;

  describe('buildPorPrecio', () => {
    it('Debería devolver un error si el presupuesto es 0 o negativo', () => {
      const result = buildPorPrecio({}, -100, false);
      expect(result).toEqual({ "Error": "El presupuesto es 0 o negativo" });
    });
  
    it('Debería devolver un error si no se puede encontrar una build por el presupuesto especificado', () => {
      const result = buildPorPrecio({}, 1, false);
      expect(result).toEqual({ "Error": "No se ha podido encontrar una build por el presupuesto especificado" });
    });
  
    it('Debería devolver una configuración por precio válida', () => {
      const result = buildPorPrecio({},2000, false);
      expect(result).toHaveProperty('placas');
      expect(result).toHaveProperty('cpu');
      expect(result).toHaveProperty('ram');
      expect(result).toHaveProperty('gpu');
      expect(result).toHaveProperty('disiapdor');
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
