const {
  handleCPU,
  handlePlacaBase,
  handleRam,
  handleDisco,
  handleFuente,
  handleDisipador
} = require("./pcBuilder");
const {
  cpuList,
  placasList,
  ramList,
  cajaList,
  gpuList,
  disipadorList,
  discoList,
  monitorList,
  fuenteList,
  ratonList,
  tecladoList,
} = require("../datos/listas");

describe("handleCPU function", () => {
  const cpuList = [
    { socket: "SocketA", tipoRam: "DDR4" },
    { socket: "SocketB", tipoRam: "DDR3" },
    // Mocked CPU data
  ];

  const mockedPlacaBase = { socket: "SocketA" };
  const mockedRAM = { tipo: "DDR4" };

  test("it should filter CPU lists based on placaBase and RAM", () => {
    const filteredListWithPlacaBase = handleCPU(cpuList, mockedPlacaBase, null);
    expect(filteredListWithPlacaBase).toEqual([
      { socket: "SocketA", tipoRam: "DDR4" },
    ]);

    const filteredListWithRAM = handleCPU(cpuList, null, mockedRAM);
    expect(filteredListWithRAM).toEqual([
      { socket: "SocketA", tipoRam: "DDR4" },
    ]);

    const filteredListWithBoth = handleCPU(cpuList, mockedPlacaBase, mockedRAM);
    expect(filteredListWithBoth).toEqual([
      { socket: "SocketA", tipoRam: "DDR4" },
    ]);

    const emptyFilteredList = handleCPU(
      cpuList,
      { socket: "SocketA" },
      { tipo: "DDR3" }
    );
    expect(emptyFilteredList).toEqual([]);
  });
});

describe("handlePlacaBase function", () => {
  const placaBaseList = [
    { socket: "SocketA", tipoRam: "DDR4", numeroM2: 2, numeroSata: 4 },
    { socket: "SocketB", tipoRam: "DDR3", numeroM2: 1, numeroSata: 2 },
    // Mocked placaBase data
  ];

  const mockedCPU = { socket: "SocketA", tipoRam: "DDR4" };
  const mockedRAM = { tipo: "DDR4" };
  const mockedM2 = ["M2_1", "M2_2"];
  const mockedSata = ["SATA_1", "SATA_2"];

  test("it should filter placaBase lists based on CPU, RAM, M2, and SATA", () => {
    const filteredListWithCPU = handlePlacaBase(
      placaBaseList,
      mockedCPU,
      null,
      [],
      []
    );
    expect(filteredListWithCPU).toEqual([
      { socket: "SocketA", tipoRam: "DDR4", numeroM2: 2, numeroSata: 4 },
    ]);

    const filteredListWithRAM = handlePlacaBase(
      placaBaseList,
      null,
      mockedRAM,
      [],
      []
    );
    expect(filteredListWithRAM).toEqual([
      { socket: "SocketA", tipoRam: "DDR4", numeroM2: 2, numeroSata: 4 },
    ]);

    const filteredListWithM2 = handlePlacaBase(
      placaBaseList,
      null,
      null,
      mockedM2,
      []
    );
    expect(filteredListWithM2).toEqual([
      { socket: "SocketA", tipoRam: "DDR4", numeroM2: 2, numeroSata: 4 },
    ]);

    const filteredListWithSata = handlePlacaBase(
      placaBaseList,
      null,
      null,
      [],
      mockedSata
    );
    expect(filteredListWithSata).toEqual([
      { socket: "SocketA", tipoRam: "DDR4", numeroM2: 2, numeroSata: 4 },
      { socket: "SocketB", tipoRam: "DDR3", numeroM2: 1, numeroSata: 2 },
    ]);

    const emptyFilteredList = handlePlacaBase(
      placaBaseList,
      { socket: "SocketC" },
      { tipo: "DDR3" },
      ["M2_3"],
      ["SATA_3"]
    );
    expect(emptyFilteredList).toEqual([]);
  });
});

describe("handleRam function", () => {
  const ramList = [
    { tipo: "DDR4" },
    { tipo: "DDR3" },
    // Mocked RAM data
  ];

  const mockedPlacaBase = { tipoRam: "DDR4" };
  const mockedCPU = { tipoRam: "DDR4" };

  test("it should filter RAM lists based on placaBase and CPU", () => {
    const filteredListWithPlacaBase = handleRam(ramList, mockedPlacaBase, null);
    expect(filteredListWithPlacaBase).toEqual([{ tipo: "DDR4" }]);

    const filteredListWithCPU = handleRam(ramList, null, mockedCPU);
    expect(filteredListWithCPU).toEqual([{ tipo: "DDR4" }]);

    const filteredListWithBoth = handleRam(ramList, mockedPlacaBase, mockedCPU);
    expect(filteredListWithBoth).toEqual([{ tipo: "DDR4" }]);

    const emptyFilteredList = handleRam(
      ramList,
      { tipoRam: "DDR2" },
      { tipoRam: "DDR3" }
    );
    expect(emptyFilteredList).toEqual([]);
  });
});

describe("handleDisco function", () => {
  const discoList = [
    { tipo: "Sata" },
    { tipo: "m.2" },
    // Mocked disco data
  ];

  const mockedPlacaBase = { numeroM2: 2, numeroSata: 2 };
  const mockedM2 = ["M2_1", "M2_2"];
  const mockedSata = ["SATA_1", "SATA_2"];

  test("it should filter disco lists based on placaBase, M2, and SATA", () => {
    const filteredListWithPlacaBase = handleDisco(
      discoList,
      mockedPlacaBase,
      [],
      []
    );
    expect(filteredListWithPlacaBase).toEqual([
      { tipo: "Sata" },
      { tipo: "m.2" },
    ]);

    const filteredListWithM2 = handleDisco(discoList, {}, mockedM2, []);
    expect(filteredListWithM2).toEqual([{ tipo: "Sata" }]);

    const filteredListWithSata = handleDisco(discoList, {}, [], mockedSata);
    expect(filteredListWithSata).toEqual([{ tipo: "m.2" }]);

    const filteredListWithBoth = handleDisco(
      discoList,
      mockedPlacaBase,
      mockedM2,
      mockedSata
    );
    expect(filteredListWithBoth).toEqual([]);

    const emptyFilteredList = handleDisco(
      discoList,
      { numeroM2: 1, numeroSata: 2 },
      ["M2_3"],
      ["SATA_3"]
    );
    expect(emptyFilteredList).toEqual([{ tipo: "Sata" }]);
    2;
    const emptyList = handleDisco(
      discoList,
      { numeroM2: 2, numeroSata: 3 },
      ["M2_3"],
      ["SATA_3", "SATA_4"]
    );
    expect(emptyList).toEqual([{ tipo: "m.2" }]);
  });
});

describe("handleFuente function", () => {
  const fuenteList = [
    { potencia: 500 },
    { potencia: 600 },
    { potencia: 750 },
    // Mocked fuente data
  ];

  const mockedCPU = { consumo: 100 };
  const mockedGPU = { potenciaRecomendada: 600};

  test("it should filter fuente lists based on CPU and GPU", () => {
    const filteredListWithGPU = handleFuente(fuenteList, null, mockedGPU);
    expect(filteredListWithGPU).toEqual([
      { potencia: 600 },
      { potencia: 750 },
    ]);

    const filteredListWithCPUAndGPU = handleFuente(
      fuenteList,
      mockedCPU,
      mockedGPU
    );
    expect(filteredListWithCPUAndGPU).toEqual([
      { potencia: 600 },
      { potencia: 750 }
    ]);

    const filteredListWithCPUCalculations = handleFuente(
      fuenteList,
      { consumo: 100 },
      { consumo: 420 }
    );
    expect(filteredListWithCPUCalculations).toEqual([{ potencia: 750 }]);

    const emptyFilteredList = handleFuente(
      fuenteList,
      { consumo: 900 },
      { potenciaRecomendada: 800 }
    );
    expect(emptyFilteredList).toEqual([]);
  });
});

describe('handleDisipador function', () => {
  const disipadorList = [
    { tipo: 'Disipador 1', ventilador: true },
    { tipo: 'Disipador 2', ventilador: false },
    // Mocked disipador data
  ];

  const mockedCPUWithVentilador = { ventilador: true };
  const mockedCPUWithoutVentilador = { ventilador: false };

  test('it should handle disipador lists based on CPU', () => {
    const filteredListWithVentiladorCPU = handleDisipador(disipadorList, mockedCPUWithVentilador);
    expect(filteredListWithVentiladorCPU).toEqual(disipadorList);

    const filteredListWithoutVentiladorCPU = handleDisipador(disipadorList, mockedCPUWithoutVentilador);
    expect(filteredListWithoutVentiladorCPU).toEqual([]);
  });
});

