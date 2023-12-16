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
          marca: "Gigabyte",
          nombre: "Gigabyte H610M",
          socket: "LGA1700",
          tipoRam: "DDR5",
          gama: "Baja",
          numeroM2: 0,
          numeroSata: 2,
          precio: {
              segundaMano: 70.00,
              amazon: 86.98,
              ebay: 89.50,
          },
          link: {
              amazon: "https://www.amazon.es/Gigabyte-H610M-V2-DDR4-Z%C3%B3calo/dp/B0C3XJPGM6/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PGGP4N21TY5V&keywords=Gigabyte+H610M&qid=1702369528&sprefix=gigabyte+h610m%2Caps%2C87&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
              ebay: "https://www.ebay.es/itm/175743088939?hash=item28eb1ab92b%3Ag%3A0y0AAOSwotVkbjoZ&amdata=enc%3AAQAIAAAAwDZIFouCc%2BNU8UXWEO%2FRaM660h51v4Gq%2FlIRg22%2B72lSNGCTlijEBn1gSPJVDcu4resG6GkS0x3RGXLMF1RQfoHIuZTavY7GHuoEmJVaRvJH01XlwuoLkGtJ%2BUKelAxmngwB5VTItCumLz94FbPWmQDtgKHKA7Tm65BgzzYA2IVHLF%2BJYw8TCZk8fBfOS%2Fz1vEn11BWC%2BWl1uZP%2Buohc%2B9ok7E0IuT1V9iO%2B0uukRU4qrPsTs2qKmR4hNwCEbPatWw%3D%3D%7Ctkp%3ABk9SR8zNj9KLYw&LH_ItemCondition=3",
          },
          imagen: "placa.jpg"
      },
      }, 10000);
      expect(result).toHaveProperty('placas');
      expect(result).toHaveProperty('cpu');
      expect(result).toHaveProperty('ram');
      expect(result).toHaveProperty('gpu');
      expect(result).toHaveProperty('fuente');
      //expect(result).toHaveProperty('m2');
      //expect(result).toHaveProperty('sata');
      expect(result).toHaveProperty('caja');
      expect(result).toHaveProperty('monitor');
      expect(result).toHaveProperty('raton');
      expect(result).toHaveProperty('teclado');
      
    });
  });
});
