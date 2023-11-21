const shortearListasPorPrecio = (segundaMano, lista) => {
  if (segundaMano) {
    return shortByPrecioSegundaMano(lista);
  } else {
    return shortByPrecioPrimeraMano(lista);
  }
};

const shortByPrecioPrimeraMano = (lista) => {
  lista.sort((a, b) => {
    const precioA = Math.min(
      a.precio.amazon || Infinity,
      a.precio.ebay || Infinity
    );
    const precioB = Math.min(
      b.precio.amazon || Infinity,
      b.precio.ebay || Infinity
    );
    return precioA - precioB;
  });

  return lista
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
exports.shortByPrecioPrimeraMano = shortByPrecioPrimeraMano; // Exponer estas funciones para las pruebas
exports.shortByPrecioSegundaMano = shortByPrecioSegundaMano; // Exponer estas funciones para las pruebas
