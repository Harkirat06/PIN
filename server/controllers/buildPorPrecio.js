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
const { mapeo } = require("./gamasEnum");

const filtroPorGama = (gama, lista) => {
  const gamaNumerica = mapeo[gama];
  let newLista = lista.filter((item) => mapeo[item.gama] == gamaNumerica);
  return newLista;
};

const buildPorPrecio = (build = {}, presupuesto = 0) => {
  let listaGamas = [
    "Premium",
    "Alta",
    "MediaAlta",
    "Media",
    "BajaMedia",
    "Baja",
  ];

  if (presupuesto <= 0) {
    return { Error: "El presupuesto es 0 o negativo" };
  }

  for (let gamaBuild = 1; gamaBuild <= listaGamas.length; gamaBuild++) {
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
      let placas = shortearListasPorPrecio(listaPlacas);
      if (placas.length != 0) {
        configuracionPorPrecio.placas = placas[0];
        if (!placas[0].precio.segundaMano) {
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
      let CPUs = shortearListasPorPrecio(listaCPU);
      if (CPUs.length != 0) {
        configuracionPorPrecio.cpu = CPUs[0];
        if (!CPUs[0].precio.segundaMano) {
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
      let rams = shortearListasPorPrecio(listaRam);
      if (rams.length != 0) {
        configuracionPorPrecio.ram = rams[0];
        if (!rams[0].precio.segundaMano) {
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
      listaGPU = shortearListasPorPrecio(listaGPU);
      if (listaGPU.length != 0) {
        configuracionPorPrecio.gpu = listaGPU[0];
        if (!listaGPU[0].precio.segundaMano) {
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

    if (!configuracionPorPrecio.sata) {
      let listaDisco = filtroPorGama(listaGamas[gamaBuild], discoList);
      listaDisco = handleDisco(
        listaDisco,
        configuracionPorPrecio.placas,
        configuracionPorPrecio.m2,
        configuracionPorPrecio.sata
      );
      listaDisco = listaDisco.filter((item) => item.tecnologia == "Sata");
      let satas = shortearListasPorPrecio(listaDisco);
      if (satas.length != 0) {
        configuracionPorPrecio.sata = satas && [satas[0]];
        if (!satas[0].precio.segundaMano) {
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

    if (!configuracionPorPrecio.m2) {
      let listaDisco = filtroPorGama(listaGamas[gamaBuild], discoList);
      listaDisco = handleDisco(
        listaDisco,
        configuracionPorPrecio.placas,
        configuracionPorPrecio.m2,
        configuracionPorPrecio.sata
      );
      listaDisco = listaDisco.filter((item) => item.tecnologia === "m2");
      let m2s = shortearListasPorPrecio(listaDisco);
      if (m2s.length != 0) {
        configuracionPorPrecio.m2 = m2s && [m2s[0]];
        if (!m2s[0].precio.segundaMano) {
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

    if (!configuracionPorPrecio.disipador) {
      let listaDisipador = filtroPorGama(listaGamas[gamaBuild], disipadorList);
      listaDisipador = handleDisipador(
        listaDisipador,
        configuracionPorPrecio.cpu
      );
      let disipadores = shortearListasPorPrecio(listaDisipador);
      if (disipadores.length != 0) {
        configuracionPorPrecio.disipador = disipadores && disipadores[0];
        if (!disipadores[0].precio.segundaMano) {
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
      let fuentes = shortearListasPorPrecio(listaFuentes);
      if (fuentes.length != 0) {
        configuracionPorPrecio.fuente = fuentes && fuentes[0];
        if (!fuentes[0].precio.segundaMano) {
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
      listaCajas = shortearListasPorPrecio(listaCajas);
      if (listaCajas.length != 0) {
        configuracionPorPrecio.caja = listaCajas && listaCajas[0];
        if (!listaCajas[0].precio.segundaMano) {
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
      listaMonitor = shortearListasPorPrecio(listaMonitor);
      if (listaMonitor.length != 0) {
        configuracionPorPrecio.monitor = listaMonitor && listaMonitor[0];
        if (!listaMonitor[0].precio.segundaMano) {
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
      listaTeclado = shortearListasPorPrecio(listaTeclado);
      if (listaTeclado.length != 0) {
        configuracionPorPrecio.teclado = listaTeclado && listaTeclado[0];
        if (!listaTeclado[0].precio.segundaMano) {
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
      listaRaton = shortearListasPorPrecio(listaRaton);
      if (listaRaton.length != 0) {
        configuracionPorPrecio.raton = listaRaton && listaRaton[0];
        if (!listaRaton[0].precio.segundaMano) {
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
    if (auxPresupuesto >= 0) {
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
  const build = req.query.build;
  const conf = buildPorPrecio(build, presupuesto);
  res.json(conf);
});
module.exports = { builderPorPrecioRouter, buildPorPrecio };
