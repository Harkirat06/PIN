const { shortearListasPorPrecio } = require("./shortearListasPorPrecio");
const builderPorPrecioRouter = require("express").Router();
const {
  handlePlacaBase,
  handleCPU,
  handleDisco,
  handleFuente,
  handleDisipador,
  handleRam,
} = require("./pcBuilder");
const {
  placasList,
  cpuList,
  disipadorList,
  ramList,
  discoList,
  gpuList,
  fuenteList,
  cajaList,
  monitorList,
  tecladoList,
  ratonList,
} = require("../datos/listas");
const { filtroPorGama } = require("./filtrarListasPorGama");

const buildPorPrecio = (build = {}, presupuesto = 0, segundaMano = false) => {
  let listaGamas = ["Alta", "Media", "Baja"];

  if (presupuesto <= 0) {
    return { Error: "El presupuesto es 0 o negativo" };
  }

  for (let gamaBuild = 0; gamaBuild < listaGamas.length; gamaBuild++) {
    let configuracionPorPrecio = { ...build };
    let auxPresupuesto = presupuesto;
    if (!configuracionPorPrecio.placas) {
      let listaPlacas = filtroPorGama(listaGamas[gamaBuild], placasList);
      listaPlacas = handlePlacaBase(
        listaPlacas,
        configuracionPorPrecio.cpu,
        configuracionPorPrecio.ram,
        configuracionPorPrecio.m2,
        configuracionPorPrecio.sata
      );
      let placas = shortearListasPorPrecio(segundaMano, listaPlacas);
      if (placas.length != 0) {
        configuracionPorPrecio.placas = placas[0];
        precioAmazon = placas[0].precio.amazon;
        precioEbay = placas[0].precio.ebay;
        precioSegundaMano = placas[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.cpu) {
      let listaCPU = filtroPorGama(listaGamas[gamaBuild], cpuList);
      listaCPU = handleCPU(
        listaCPU,
        configuracionPorPrecio.placas,
        configuracionPorPrecio.ram
      );
      let CPUs = shortearListasPorPrecio(segundaMano, listaCPU);
      if (CPUs.length != 0) {
        configuracionPorPrecio.cpu = CPUs[0];
        precioAmazon = CPUs[0].precio.amazon;
        precioEbay = CPUs[0].precio.ebay;
        precioSegundaMano = CPUs[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.ram) {
      let listaRam = filtroPorGama(listaGamas[gamaBuild], ramList);
      listaRam = handleRam(
        listaRam,
        configuracionPorPrecio.placas,
        configuracionPorPrecio.cpu
      );
      let rams = shortearListasPorPrecio(segundaMano, listaRam);
      if (rams.length != 0) {
        configuracionPorPrecio.ram = rams[0];
        precioAmazon = rams[0].precio.amazon;
        precioEbay = rams[0].precio.ebay;
        precioSegundaMano = rams[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.gpu) {
      let listaGPU = filtroPorGama(listaGamas[gamaBuild], gpuList);
      listaGPU = shortearListasPorPrecio(segundaMano, listaGPU);
      if (listaGPU.length != 0) {
        configuracionPorPrecio.gpu = listaGPU[0];
        precioAmazon = listaGPU[0].precio.amazon;
        precioEbay = listaGPU[0].precio.ebay;
        precioSegundaMano = listaGPU[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.m2) {
      let listaDisco = filtroPorGama(listaGamas[gamaBuild], discoList);
      listaDisco = handleDisco(
        listaDisco,
        configuracionPorPrecio.placas,
        configuracionPorPrecio.m2,
        configuracionPorPrecio.sata
      );
      listaDisco.filter((item) => item.tecnologia == "m.2");
      let m2s = shortearListasPorPrecio(segundaMano, listaDisco);
      if (m2s.length != 0) {
        configuracionPorPrecio.m2 = m2s && [m2s[0]];
        precioAmazon = m2s[0].precio.amazon;
        precioEbay = m2s[0].precio.ebay;
        precioSegundaMano = m2s[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.sata) {
      let listaDisco = filtroPorGama(listaGamas[gamaBuild], discoList);
      listaDisco = handleDisco(
        listaDisco,
        configuracionPorPrecio.placas,
        configuracionPorPrecio.m2,
        configuracionPorPrecio.sata
      );
      listaDisco.filter((item) => item.tecnologia == "Sata");
      let satas = shortearListasPorPrecio(segundaMano, listaDisco);
      if (satas.length != 0) {
        configuracionPorPrecio.sata = satas && [satas[0]];
        precioAmazon = satas[0].precio.amazon;
        precioEbay = satas[0].precio.ebay;
        precioSegundaMano = satas[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.disipador) {
      let listaDisipador = filtroPorGama(listaGamas[gamaBuild], disipadorList);
      listaDisipador = handleDisipador(
        listaDisipador,
        configuracionPorPrecio.cpu
      );
      let disipadores = shortearListasPorPrecio(segundaMano, listaDisipador);
      if (disipadores.length != 0) {
        configuracionPorPrecio.disipador = disipadores && disipadores[0];
        precioAmazon = disipadores[0].precio.amazon;
        precioEbay = disipadores[0].precio.ebay;
        precioSegundaMano = disipadores[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.fuente) {
      let listaFuentes = filtroPorGama(listaGamas[gamaBuild], fuenteList);
      listaFuentes = handleFuente(
        listaFuentes,
        configuracionPorPrecio.cpu,
        configuracionPorPrecio.gpu
      );
      let fuentes = shortearListasPorPrecio(segundaMano, listaFuentes);
      if (fuentes.length != 0) {
        configuracionPorPrecio.fuente = fuentes && fuentes[0];
        precioAmazon = fuentes[0].precio.amazon;
        precioEbay = fuentes[0].precio.ebay;
        precioSegundaMano = fuentes[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.caja) {
      let listaCajas = filtroPorGama(listaGamas[gamaBuild], cajaList);
      listaCajas = shortearListasPorPrecio(segundaMano, listaCajas);
      if (listaCajas.length != 0) {
        configuracionPorPrecio.caja = listaCajas && listaCajas[0];
        precioAmazon = listaCajas[0].precio.amazon;
        precioEbay = listaCajas[0].precio.ebay;
        precioSegundaMano = listaCajas[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.monitor) {
      let listaMonitor = filtroPorGama(listaGamas[gamaBuild], monitorList);
      listaMonitor = shortearListasPorPrecio(segundaMano, listaMonitor);
      if (listaMonitor.length != 0) {
        configuracionPorPrecio.monitor = listaMonitor && listaMonitor[0];
        precioAmazon = listaMonitor[0].precio.amazon;
        precioEbay = listaMonitor[0].precio.ebay;
        precioSegundaMano = listaMonitor[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.teclado) {
      let listaTeclado = filtroPorGama(listaGamas[gamaBuild], tecladoList);
      listaTeclado = shortearListasPorPrecio(segundaMano, listaTeclado);
      if (listaTeclado.length != 0) {
        configuracionPorPrecio.teclado = listaTeclado && listaTeclado[0];
        precioAmazon = listaTeclado[0].precio.amazon;
        precioEbay = listaTeclado[0].precio.ebay;
        precioSegundaMano = listaTeclado[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }

    if (!configuracionPorPrecio.raton) {
      let listaRaton = filtroPorGama(listaGamas[gamaBuild], ratonList);
      listaRaton = shortearListasPorPrecio(segundaMano, listaRaton);
      if (listaRaton.length != 0) {
        configuracionPorPrecio.raton = listaRaton && listaRaton[0];
        precioAmazon = listaRaton[0].precio.amazon;
        precioEbay = listaRaton[0].precio.ebay;
        precioSegundaMano = listaRaton[0].precio.segundaMano;
        auxPresupuesto -= Math.min(precioAmazon, precioEbay, precioSegundaMano);
      }
    }
    if (auxPresupuesto >= 0 && Object.keys(configuracionPorPrecio).length >= 10) {
      console.log(`Build con ${auxPresupuesto}€ sobrante es: `)
      console.log(configuracionPorPrecio)
      return configuracionPorPrecio;
    }
  }
  return {
    "Error":
      "No se ha podido encontrar una build por el presupuesto especificado",
  };

  /*for (let gamaBuild = 2; 0 <= gamaBuild; gamaBuild - 1) {
    configuracionPorPrecio = build;
    let [
      placasList,
      cpuList,
      disipadorList,
      ramList,
      discoList,
      gpuList,
      fuenteList,
      cajaList,
      monitorList,
      tecladoList,
      ratonList,
    ] = shortearListasPorPrecio(listaGamas[gamaBuild - 1], segundaMano);

    if (!configuracionPorPrecio.placaBase) {
      placasList = handlePlacaBase(placasList, configuracionPorPrecio.cpu, configuracionPorPrecio.ram, configuracionPorPrecio.m2, configuracionPorPrecio.sata);
      configuracionPorPrecio.placas = placasList && placasList[0];
    }

    if (!configuracionPorPrecio.cpu) {
      cpuList = handleCPU(cpuList, configuracionPorPrecio.placaBase, configuracionPorPrecio.ram);
      configuracionPorPrecio.cpu = cpuList && cpuList[0];
    }

    if (!configuracionPorPrecio.ram) {
      ramList = handleRam(ramList, configuracionPorPrecio.placaBase, configuracionPorPrecio.cpu);
      configuracionPorPrecio.ram = ramList && ramList[0];
    }

    if (!configuracionPorPrecio.gpu) {
      configuracionPorPrecio.gpu = gpuList && gpuList[0];
    }

    if (!configuracionPorPrecio.m2) {
      discoList = handleDisco(discoList, configuracionPorPrecio.placaBase, configuracionPorPrecio.m2, configuracionPorPrecio.sata);
      discoList = discoList.filter((item)=> item.tipo == "Sata")
      configuracionPorPrecio.m2= discoList && discoList[0];
    }

    if (!configuracionPorPrecio.sata) {
      discoList = handleDisco(discoList, configuracionPorPrecio.placaBase, configuracionPorPrecio.m2, configuracionPorPrecio.sata);
      discoList = discoList.filter((item)=> item.tipo == "m2")
      configuracionPorPrecio.sata= discoList && discoList[0];
    }
    
    if (!configuracionPorPrecio.disipador) {
      disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu);
      configuracionPorPrecio.disipador = disipadorList && disipadorList[0];
    }

    if (!configuracionPorPrecio.fuente) {
      fuenteList = handleFuente(fuenteList, configuracionPorPrecio.cpu, configuracionPorPrecio.gpu);
      configuracionPorPrecio.fuente = fuenteList && fuenteList[0];
    }
    
    if (!configuracionPorPrecio.caja) {
      configuracionPorPrecio.caja = cajaList && cajaList[0];
    }

    if (!configuracionPorPrecio.monitor) {
      configuracionPorPrecio.monitor = monitorList && monitorList[0];
    }

    if(!configuracionPorPrecio.teclado) {
      configuracionPorPrecio.teclado = tecladoList && tecladoList[0];
    }

    if(!configuracionPorPrecio.raton) {
      configuracionPorPrecio.ratonList = ratonList && ratonList[0];
    }
    
    for (i = 0; i < configuracionPorPrecio.length; i++) {
      costeBuild += Math.min(
        configuracionPorPrecio[i].precio.amazon || Infinity,
        configuracionPorPrecio[i].precio.ebay || Infinity,
        segundaMano ? configuracionPorPrecio[i].precio.segundaMano || Infinity : Infinity
      );
    }
    if (costeBuild <= presupuesto) {
      return configuracionPorPrecio;
    } else {
      costeBuild = 0;
    }
  }
  return {"Error" : "No se ha podido encontrar una build por el presupuesto especificado"};
  */
};

builderPorPrecioRouter.get("/", async (req, res) => {
  const presupuesto = req.query.presupuesto;
  const segundaMano = req.query.segundaMano;
  const build = req.query.build;
  const conf = buildPorPrecio(build, presupuesto, segundaMano);
  res.json(conf);
});
module.exports = { builderPorPrecioRouter, buildPorPrecio };
