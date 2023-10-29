const { buildPorPrecio } = require("./buildPorPrecio");

describe("buildPorPrecio function", () => {
  test("it should return an empty object for zero or negative budget", () => {
    const result = buildPorPrecio(0);
    expect(result).toEqual({});

    const negativeResult = buildPorPrecio(-100);
    expect(negativeResult).toEqual({});
  });

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

  jest.mock("./shortearListasPorPrecio", () => {
    return jest.fn((gama) => {
      return expectedConfiguration;
    });
  });

  test("it should return a valid configuration within the budget", () => {
    const result = buildPorPrecio(presupuestoSuficiente);
    expect(result).toEqual(expectedConfiguration);
  });

  test("it should return an empty object if no suitable configuration found", () => {
    // ... Simular datos y probar el comportamiento esperado
  });
});
