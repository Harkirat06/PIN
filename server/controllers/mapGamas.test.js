const { mapList, mapGamas } = require("./mapGamas");
const {
    placasList,
    cpuList,
    cajaList,
    gpuList,
    ramList,
    discoList,
    ratonList,
    monitorList,
    tecladoList,
    fuenteList,
    disipadorList} = require("../datos/listas")
const {
  gamaBaja,
  gamaBajaMedia,
  gamaMedia,
  gamaMediaAlta,
  gamaAlta,
  gamaPremium,
} = require("./gamasEnum");

describe("mapList function", () => {
  test("it should map items to their respective gama string", () => {
    const inputList = [
      { gama: gamaBaja },
      { gama: gamaBajaMedia },
      { gama: gamaMedia },
      { gama: gamaMediaAlta },
      { gama: gamaAlta },
      { gama: gamaPremium },
      // Add more test cases if needed
    ];

    const expectedOutput = [
      { gama: "Baja" },
      { gama: "BajaMedia" },
      { gama: "Media" },
      { gama: "MediaAlta" },
      { gama: "Alta" },
      { gama: "Premium" },
      // Add corresponding expected values for additional test cases
    ];

    const output = mapList(inputList);

    expect(output).toEqual(expectedOutput);
  });
});

describe("mapGamas function", () => {
  // Write your tests for mapGamas function, considering the mock data you'll use
  test("it should map various lists", () => {
    // Mock data example
    const mockLists = {
        placasList,
        cpuList,
        cajaList,
        gpuList,
        ramList,
        discoList,
        ratonList,
        monitorList,
        tecladoList,
        fuenteList,
        disipadorList
    };

    const mappedLists = mapGamas(mockLists);

    expect(mappedLists).toHaveLength(11); // Assuming 11 different lists are being mapped
  });
});

