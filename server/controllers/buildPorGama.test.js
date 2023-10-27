const { buildsGamaBaja, buildsGamaMedia, buildsGamaAlta } = require("../datos/listas");
const {buildPorGama} = require("./buildPorGama"); // Importa la función que deseas probar

describe("Pruebas para buildPorGama", () => {
  it("Debería devolver una configuracion de gama baja.", () => {
    const gama = "baja"; // Cambia la gama según tu caso de prueba
    const resultado = buildPorGama(gama);

    // Dependiendo de la gama, selecciona el array correcto para la comparación
    const arrayCorrecto = gama === "baja" ? buildsGamaBaja :
                         gama === "media" ? buildsGamaMedia :
                         gama === "alta" ? buildsGamaAlta : [];

    expect(arrayCorrecto).toContain(resultado);
  });

  it("Debería devolver una configuracion de gama media.", () => {
    const gama = "media"; // Cambia la gama según tu caso de prueba
    const resultado = buildPorGama(gama);

    // Dependiendo de la gama, selecciona el array correcto para la comparación
    const arrayCorrecto = gama === "baja" ? buildsGamaBaja :
                         gama === "media" ? buildsGamaMedia :
                         gama === "alta" ? buildsGamaAlta : [];

    expect(arrayCorrecto).toContain(resultado);
  });

  it("Debería devolver una configuracion de gama alta.", () => {
    const gama = "alta"; // Cambia la gama según tu caso de prueba
    const resultado = buildPorGama(gama);

    // Dependiendo de la gama, selecciona el array correcto para la comparación
    const arrayCorrecto = gama === "baja" ? buildsGamaBaja :
                         gama === "media" ? buildsGamaMedia :
                         gama === "alta" ? buildsGamaAlta : [];

    expect(arrayCorrecto).toContain(resultado);
  });
});

