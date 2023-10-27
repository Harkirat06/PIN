const { buildPorPrecio } = require("./buildPorPrecio");

describe('buildPorPrecio', () => {
    it('debería retornar una configuración válida dentro del presupuesto', () => {
        // Define un presupuesto y llama a la función.
        const presupuesto = 1000; // Reemplaza con el valor deseado.
        const configuracion = buildPorPrecio(presupuesto, false); // Prueba con segundaMano = false.

        // Realiza las aserciones para verificar que la configuración es válida y se ajusta al presupuesto.
        // Por ejemplo, puedes verificar que el costo total de la configuración no supere el presupuesto.

        expect(configuracion).toBeTruthy();
        // Agrega más aserciones según sea necesario.
    });
});