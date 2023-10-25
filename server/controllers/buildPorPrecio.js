const { filtrarListasPorGama } = require("./filtrarListasPorGama");
const { gamaPremium } = require("./gamasEnum");
const { shortearListasPorPrecio } = require("./shortearListasPorPrecio");
const { handleCPU, handleDisipador, handleRam, handleDisco, handleFuente } = require("./pcBuilder");
const builderPorPrecioRouter = require("express").Router()

const buildPorPrecio = (presupuesto, segundaMano = false) => {
    let configuracionPorPrecio = {};
    let costeBuild = 0;
    for (let gamaBuild = gamaPremium; gamaBuild > 0; gamaBuild - 1) {
        let [placasList, cpuList, disipadorList, ramList, discoList, gpuList, fuenteList, cajaList, monitorList, tecladoList, ratonList] = filtrarListasPorGama(gamaBuild)[placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList] = shortearListasPorPrecio(segundaMano);
        configuracionPorPrecio.push(placasList[0]);
        cpuList = handleCPU(cpuList, configuracionPorPrecio.placaBase, configuracionPorPrecio, ram);
        configuracionPorPrecio.push(cpuList[0]);
        disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu);
        configuracionPorPrecio.push(disipadorList[0]);
        ramList = handleRam(ramList, configuracionPorPrecio.placaBase, configuracionPorPrecio.cpu);
        configuracionPorPrecio.push(ramList[0]);
        discoList = handleDisco(discoList, configuracionPorPrecio.placaBase, configuracionPorPrecio.m2, configuracionPorPrecio.sata);
        configuracionPorPrecio.push(discoList[0]);
        configuracionPorPrecio.push(gpuList[0]);
        fuenteList = handleFuente(fuenteList, configuracionPorPrecio.cpu, configuracionPorPrecio.gpu);
        configuracionPorPrecio.push(fuenteList[0]);
        configuracionPorPrecio.push(cajaList[0]);
        configuracionPorPrecio.push(monitorList[0]);
        configuracionPorPrecio.push(tecladoList[0]);
        configuracionPorPrecio.push(ratonList[0]);
        if (segundaMano) {
            configuracionPorPrecio.forEach(element => {
                costeBuild += Math.min(element.precio.amazon || Infinity, element.precio.ebay || Infinity, element.precio.segundaMano || Infinity);
            });
            if (costeBuild <= presupuesto) {
                return configuracionPorPrecio;
            } else {
                configuracionPorPrecio = {};
                costeBuild = 0;
            }
        } else {
            configuracionPorPrecio.forEach(element => {
                costeBuild += Math.min(element.precio.amazon || Infinity, element.precio.ebay || Infinity);
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
    const presupuesto = req.params.presupuesto
    const conf = buildPorPrecio(presupuesto, segundaMano)
    res.json(conf)
})
exports.builderPorPrecioRouter = builderPorPrecioRouter;
