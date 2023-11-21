const {
    shortByPrecioPrimeraMano,
    shortByPrecioSegundaMano
} = require('./shortearListasPorPrecio');

describe('shortByPrecioPrimeraMano', () => {
    test('debería ordenar las listas correctamente en primera mano', () => {
        const lista = [
                { precio: { amazon: 100, ebay: 120 } },
                { precio: { amazon: 80, ebay: 90 } }
        ]

        const resultado = shortByPrecioPrimeraMano(lista);

        expect(resultado[0].precio.amazon).toBeLessThanOrEqual(resultado[1].precio.amazon);
        // Realiza más aserciones según tus necesidades
    });

    // Agrega más casos de prueba según sea necesario
});

describe('shortByPrecioSegundaMano', () => {
    test('debería ordenar las listas correctamente en segunda mano', () => {
        const lista =  [
                { precio: { amazon: 100, ebay: 120, segundaMano: 50 } },
                { precio: { amazon: 80, ebay: 90, segundaMano: 40 } }
            ]

        const resultado = shortByPrecioSegundaMano(lista);

        expect(resultado[0].precio.amazon).toBeLessThanOrEqual(resultado[1].precio.amazon);
        expect(resultado[0].precio.segundaMano).toBeLessThanOrEqual(resultado[1].precio.segundaMano);
        // Agrega más aserciones según tus necesidades
    });

    // Agrega más casos de prueba según sea necesario
});

