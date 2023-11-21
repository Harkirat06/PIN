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

  
  const filtroPorSegundaMano = (lista,SegundaMano) => {
    let newLista
    if (SegundaMano){

        lista.forEach(iteam => {
            if(iteam.precio.hasOwnProperty('segundaMano')){

                newLista.push(iteam)
            }
            
        });
    }

    return newLista
  };