const { buildsGamaBaja, buildsGamaMedia, buildsGamaAlta } = require("../datos/listas");
const {buildPorGama} = require("./buildPorGama"); // Importa la función que deseas probar

describe("Pruebas para buildPorGama", () => {
  it("Debería devolver un objeto en el array correcto", () => {
    const gama = "baja"; // Cambia la gama según tu caso de prueba
    const resultado = buildPorGama(gama);

    // Dependiendo de la gama, selecciona el array correcto para la comparación
    const arrayCorrecto = gama === "baja" ? buildsGamaBaja :
                         gama === "media" ? buildsGamaMedia :
                         gama === "alta" ? buildsGamaAlta : [];

    expect(arrayCorrecto).toContain(resultado);
  });
});

