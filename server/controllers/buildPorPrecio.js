const { gamaPremium } = require("./gamasEnum");
const { shortearListasPorPrecio } = require("./shortearListasPorPrecio");
const {
  handleCPU,
  handleDisipador,
  handleRam,
  handleDisco,
  handleFuente,
  handlePlacaBase,
} = require("./pcBuilder");
const { config } = require("dotenv");
const builderPorPrecioRouter = require("express").Router();

const buildPorPrecio = (build, presupuesto, segundaMano = false) => {
  let configuracionPorPrecio = {};
  let costeBuild = 0;

  let listaGamas = ["Baja", "BajaMedia", "Media", "MediaAlta", "Alta", "Premium"]

  if (presupuesto <= 0) {
    return {"Error" : "El presupuesto es 0 o negativo"};
  }

  for (let gamaBuild = gamaPremium; gamaBuild > 0; gamaBuild - 1) {
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
};

builderPorPrecioRouter.get("/", async (req, res) => {
  const presupuesto = req.query.presupuesto;
  const segundaMano = req.query.segundaMano
  const build = req.query.build
  const conf = buildPorPrecio(build, presupuesto, segundaMano);
  res.json(conf);
});
module.exports = { builderPorPrecioRouter, buildPorPrecio };
