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
        if (!segundaMano) {
          precioAmazon = placas[0].precio.amazon;
          precioEbay = placas[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = placas[0].precio.amazon;
          precioEbay = placas[0].precio.ebay;
          precioSegundaMano = placas[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
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
        if (!segundaMano) {
          precioAmazon = CPUs[0].precio.amazon;
          precioEbay = CPUs[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = CPUs[0].precio.amazon;
          precioEbay = CPUs[0].precio.ebay;
          precioSegundaMano = CPUs[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
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
        if (!segundaMano) {
          precioAmazon = rams[0].precio.amazon;
          precioEbay = rams[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = rams[0].precio.amazon;
          precioEbay = rams[0].precio.ebay;
          precioSegundaMano = rams[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
      }
    }

    if (!configuracionPorPrecio.gpu) {
      let listaGPU = filtroPorGama(listaGamas[gamaBuild], gpuList);
      listaGPU = shortearListasPorPrecio(segundaMano, listaGPU);
      if (listaGPU.length != 0) {
        configuracionPorPrecio.gpu = listaGPU[0];
        if (!segundaMano) {
          precioAmazon = listaGPU[0].precio.amazon;
          precioEbay = listaGPU[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = listaGPU[0].precio.amazon;
          precioEbay = listaGPU[0].precio.ebay;
          precioSegundaMano = listaGPU[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
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
        if (!segundaMano) {
          precioAmazon = m2s[0].precio.amazon;
          precioEbay = m2s[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = m2s[0].precio.amazon;
          precioEbay = m2s[0].precio.ebay;
          precioSegundaMano = m2s[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
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
        if (!segundaMano) {
          precioAmazon = satas[0].precio.amazon;
          precioEbay = satas[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = satas[0].precio.amazon;
          precioEbay = satas[0].precio.ebay;
          precioSegundaMano = satas[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
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
        if (!segundaMano) {
          precioAmazon = disipadores[0].precio.amazon;
          precioEbay = disipadores[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = disipadores[0].precio.amazon;
          precioEbay = disipadores[0].precio.ebay;
          precioSegundaMano = disipadores[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
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
        if (!segundaMano) {
          precioAmazon = fuentes[0].precio.amazon;
          precioEbay = fuentes[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = fuentes[0].precio.amazon;
          precioEbay = fuentes[0].precio.ebay;
          precioSegundaMano = fuentes[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
      }
    }

    if (!configuracionPorPrecio.caja) {
      let listaCajas = filtroPorGama(listaGamas[gamaBuild], cajaList);
      listaCajas = shortearListasPorPrecio(segundaMano, listaCajas);
      if (listaCajas.length != 0) {
        configuracionPorPrecio.caja = listaCajas && listaCajas[0];
        if (!segundaMano) {
          precioAmazon = listaCajas[0].precio.amazon;
          precioEbay = listaCajas[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = listaCajas[0].precio.amazon;
          precioEbay = listaCajas[0].precio.ebay;
          precioSegundaMano = listaCajas[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
      }
    }

    if (!configuracionPorPrecio.monitor) {
      let listaMonitor = filtroPorGama(listaGamas[gamaBuild], monitorList);
      listaMonitor = shortearListasPorPrecio(segundaMano, listaMonitor);
      if (listaMonitor.length != 0) {
        configuracionPorPrecio.monitor = listaMonitor && listaMonitor[0];
        if (!segundaMano) {
          precioAmazon = listaMonitor[0].precio.amazon;
          precioEbay = listaMonitor[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = listaMonitor[0].precio.amazon;
          precioEbay = listaMonitor[0].precio.ebay;
          precioSegundaMano = listaMonitor[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
      }
    }

    if (!configuracionPorPrecio.teclado) {
      let listaTeclado = filtroPorGama(listaGamas[gamaBuild], tecladoList);
      listaTeclado = shortearListasPorPrecio(segundaMano, listaTeclado);
      if (listaTeclado.length != 0) {
        configuracionPorPrecio.teclado = listaTeclado && listaTeclado[0];
        if (!segundaMano) {
          precioAmazon = listaTeclado[0].precio.amazon;
          precioEbay = listaTeclado[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = listaTeclado[0].precio.amazon;
          precioEbay = listaTeclado[0].precio.ebay;
          precioSegundaMano = listaTeclado[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
      }
    }

    if (!configuracionPorPrecio.raton) {
      let listaRaton = filtroPorGama(listaGamas[gamaBuild], ratonList);
      listaRaton = shortearListasPorPrecio(segundaMano, listaRaton);
      if (listaRaton.length != 0) {
        configuracionPorPrecio.raton = listaRaton && listaRaton[0];
        if (!segundaMano) {
          precioAmazon = listaRaton[0].precio.amazon;
          precioEbay = listaRaton[0].precio.ebay;
          auxPresupuesto -= Math.min(precioAmazon, precioEbay);
        } else {
          precioAmazon = listaRaton[0].precio.amazon;
          precioEbay = listaRaton[0].precio.ebay;
          precioSegundaMano = listaRaton[0].precio.segundaMano;
          auxPresupuesto -= Math.min(
            precioAmazon,
            precioEbay,
            precioSegundaMano
          );
        }
      }
    }
    if (
      auxPresupuesto >= 0 &&
      Object.keys(configuracionPorPrecio).length >= 10
    ) {
      console.log(`Build con ${auxPresupuesto}€ sobrante es: `);
      console.log(configuracionPorPrecio);
      return configuracionPorPrecio;
    }
  }
  return {
    Error:
      "No se ha podido encontrar una build por el presupuesto especificado",
  };
};

builderPorPrecioRouter.get("/", async (req, res) => {
  const presupuesto = req.query.presupuesto;
  const segundaMano = req.query.segundaMano;
  const build = req.query.build;
  const conf = buildPorPrecio(build, presupuesto, segundaMano);
  res.json(conf);
});
module.exports = { builderPorPrecioRouter, buildPorPrecio };
