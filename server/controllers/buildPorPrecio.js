const { filtrarListasPorGama } = require("./filtrarListasPorGama");
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
    configuracionPorPrecio.placasList = placasList[0];
    cpuList = handleCPU(
      cpuList,
      configuracionPorPrecio.placaBase,
      configuracionPorPrecio.ram
    );
    configuracionPorPrecio.cpuList = cpuList[0];
    disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu);
    configuracionPorPrecio.disipadorList = disipadorList[0];
    ramList = handleRam(
      ramList,
      configuracionPorPrecio.placaBase,
      configuracionPorPrecio.cpu
    );
    configuracionPorPrecio.ramList = ramList[0];
    discoList = handleDisco(
      discoList,
      configuracionPorPrecio.placaBase,
      configuracionPorPrecio.m2,
      configuracionPorPrecio.sata
    );
    configuracionPorPrecio.discoList = discoList[0];
    configuracionPorPrecio.gpuList = gpuList[0];
    fuenteList = handleFuente(
      fuenteList,
      configuracionPorPrecio.cpu,
      configuracionPorPrecio.gpu
    );
    configuracionPorPrecio.fuenteList = fuenteList[0];
    configuracionPorPrecio.cajaList = cajaList[0];
    configuracionPorPrecio.monitorList = monitorList[0];
    configuracionPorPrecio.tecladoList = tecladoList[0];
    configuracionPorPrecio.ratonList = ratonList[0];
    if (segundaMano) {
      configuracionPorPrecio.forEach((element) => {
        costeBuild += Math.min(
          element.precio.amazon || Infinity,
          element.precio.ebay || Infinity,
          element.precio.segundaMano || Infinity
        );
      });
      if (costeBuild <= presupuesto) {
        return configuracionPorPrecio;
      } else {
        configuracionPorPrecio = {};
        costeBuild = 0;
      }
    } else {
      configuracionPorPrecio.forEach((element) => {
        costeBuild += Math.min(
          element.precio.amazon || Infinity,
          element.precio.ebay || Infinity
        );
      });
      if (costeBuild <= presupuesto) {
        return configuracionPorPrecio;
      } else {
        configuracionPorPrecio = {};
        costeBuild = 0;
      }
    }
  }
  return configuracionPorPrecio;
};

builderPorPrecioRouter.get("/", async (req, res) => {
  const presupuesto = req.params.presupuesto;
  const conf = buildPorPrecio(presupuesto, segundaMano);
  res.json(conf);
});
module.exports = { builderPorPrecioRouter, buildPorPrecio };
