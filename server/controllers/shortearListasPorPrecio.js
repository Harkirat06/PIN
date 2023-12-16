const shortearListasPorPrecio = (lista) => {
    return shortByPrecioSegundaMano(lista);
};

const shortByPrecioSegundaMano = (lista) => {
    lista.sort((a, b) => {
      const precioA = Math.min(
        a.precio.amazon || Infinity,
        a.precio.ebay || Infinity,
        a.precio.segundaMano || Infinity
      );
      const precioB = Math.min(
        b.precio.amazon || Infinity,
        b.precio.ebay || Infinity,
        b.precio.segundaMano || Infinity
      );
      return precioA - precioB;
    });
  

  return lista
};

exports.shortearListasPorPrecio = shortearListasPorPrecio;
exports.shortByPrecioSegundaMano = shortByPrecioSegundaMano; // Exponer estas funciones para las pruebas
