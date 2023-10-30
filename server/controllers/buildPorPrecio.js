const { gamaPremium } = require("./gamasEnum");
const { shortearListasPorPrecio } = require("./shortearListasPorPrecio");
const {
  handleCPU,
  handleDisipador,
  handleRam,
  handleDisco,
  handleFuente,
} = require("./pcBuilder");
const builderPorPrecioRouter = require("express").Router();

const buildPorPrecio = (presupuesto, segundaMano = false) => {
  let configuracionPorPrecio = {};
  let costeBuild = 0;

  if (presupuesto <= 0) {
    return {}; // Devolver un objeto vacío si el presupuesto es cero o negativo
  }

  for (let gamaBuild = gamaPremium; gamaBuild > 0; gamaBuild - 1) {
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
    ] = shortearListasPorPrecio(gamaBuild, segundaMano);

    cpuList = handleCPU(
      cpuList,
      configuracionPorPrecio.placaBase,
      configuracionPorPrecio.ram
    );

    disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu);

    ramList = handleRam(
      ramList,
      configuracionPorPrecio.placaBase,
      configuracionPorPrecio.cpu
    );

    discoList = handleDisco(
      discoList,
      configuracionPorPrecio.placaBase,
      configuracionPorPrecio.m2,
      configuracionPorPrecio.sata
    );

    fuenteList = handleFuente(
      fuenteList,
      configuracionPorPrecio.cpu,
      configuracionPorPrecio.gpu
    );

    configuracionPorPrecio.placasList = placasList && placasList[0];
    configuracionPorPrecio.cpuList = cpuList && cpuList[0];
    configuracionPorPrecio.ramList = ramList && ramList[0];
    configuracionPorPrecio.gpuList = gpuList && gpuList[0];
    configuracionPorPrecio.discoList = discoList && discoList[0];
    configuracionPorPrecio.disipadorList = disipadorList && disipadorList[0];
    configuracionPorPrecio.fuenteList = fuenteList && fuenteList[0];
    configuracionPorPrecio.cajaList = cajaList && cajaList[0];
    configuracionPorPrecio.monitorList = monitorList && monitorList[0];
    configuracionPorPrecio.tecladoList = tecladoList && tecladoList[0];
    configuracionPorPrecio.ratonList = ratonList && ratonList[0];
    for (i = 0; i < configuracionPorPrecio.length; i++) {
      costeBuild += Math.min(
        configuracionPorPrecio[i].precio.amazon || Infinity,
        configuracionPorPrecio[i].precio.ebay || Infinity,
        segundaMano
          ? configuracionPorPrecio[i].precio.segundaMano || Infinity
          : Infinity
      );
    }
    if (costeBuild <= presupuesto) {
      return configuracionPorPrecio;
    } else {
      configuracionPorPrecio = {};
      costeBuild = 0;
    }
  }
  return configuracionPorPrecio;
};

builderPorPrecioRouter.get("/", async (req, res) => {
  const presupuesto = req.query.presupuesto;
  const segundaMano = req.query.segundaMano
  const conf = buildPorPrecio(presupuesto, segundaMano);
  res.json(conf);
});
module.exports = { builderPorPrecioRouter, buildPorPrecio };
