
  
  const filtroPorSegundaMano = (lista,SegundaMano) => {
   
    let newLista = lista.filter(
        (item) =>
          item.precio.SegundaMano
      );
    return newLista
  };
  exports.filtroPorSegundaMano = filtroPorSegundaMano