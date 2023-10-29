const { filtrarListasPorGama, filtroPorGama } = require("./filtrarListasPorGama");
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

// Mock de las listas de datos
const mockDataLists = {
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
};

describe("filtroPorGama function", () => {
  test("it should filter items based on the provided gama", () => {
    const gama = "Alta"; // Gama para filtrar (debes ajustar esto según tu implementación)

    // Agregar datos simulados a 'listaEjemplo' para probar el filtro
    const listaEjemplo = mockDataLists.cpuList;

    const filteredList = filtroPorGama(gama, listaEjemplo);

    // Realiza las comprobaciones pertinentes para verificar si la lista se ha filtrado correctamente
    // Por ejemplo:
    expect(filteredList).toHaveLength(2);
    // Agrega más aserciones según la lógica de filtrado y los datos de prueba utilizados
  });
});

describe("filtrarListasPorGama function", () => {
  test("it should filter all lists based on the provided gama", () => {
    const gama = "Baja"; // Gama para filtrar (debes ajustar esto según tu implementación)

    const filteredLists = filtrarListasPorGama(gama);

    // Realiza las comprobaciones pertinentes para verificar si todas las listas se han filtrado correctamente
    // Por ejemplo:
    expect(filteredLists).toHaveLength(11); // Asegurarse de que se devuelvan todas las listas
    // Agrega más aserciones según la lógica de filtrado y los datos de prueba utilizados
  });
});

