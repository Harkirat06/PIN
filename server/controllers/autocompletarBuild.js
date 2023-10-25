const { filtrarListasPorGama } = require("./filtrarListasPorGama");
const { handleCPU, handleDisipador, handleRam, handleDisco, handleFuente } = require("./pcBuilder");
const autocompletarBuildRouter = require("express").Router()

const autocompletarBuild = (presupuesto, initialConf, segundaMano = false) => {
    let configuracionPorPrecio = {};
    let costeBuild = 0;
    for (let gamaBuild = gamaPremium; gamaBuild > 0; gamaBuild - 1) {
        let [placasList, cpuList, disipadorList, ramList, discoList, gpuList, fuenteList, cajaList, monitorList, tecladoList, ratonList] = filtrarListasPorGama(gamaBuild)[placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList] = shortearListasPorPrecio(segundaMano);

        configuracionPorPrecio.placaBase = (Object.keys(initialConf.placaBase).length == 0) ? placasList[0] : initialConf.placaBase;

        cpuList = handleCPU(cpuList, initialConf.placaBase, configuracionPorPrecio.ram);
        configuracionPorPreciocpu = (Object.keys(initialConf.cpu).length == 0) ? cpuList[0] : initialConf.cpu;

        disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu);
        configuracionPorPrecio.disipador = (Object.keys(initialConf.disipador).length == 0) ? disipadorList[0] : initialConf.disipador;

        ramList = handleRam(ramList, configuracionPorPrecio.placaBase, configuracionPorPrecio.cpu);
        configuracionPorPrecio.ram = (Object.keys(initialConf.ram).length == 0) ? ramList[0] : initialConf.ram;

        discoList = handleDisco(discoList, configuracionPorPrecio.placaBase, configuracionPorPrecio.m2, configuracionPorPrecio.sata);
        configuracionPorPrecio.disco = (Object.keys(initialConf.disco).length == 0) ? discoList[0] : initialConf.disco;
        configuracionPorPrecio.gpu = (Object.keys(initialConf.gpu).length == 0) ? gpuList[0] : initialConf.gpu;

        fuenteList = handleFuente(fuenteList, configuracionPorPrecio.cpu, configuracionPorPrecio.gpu);
        configuracionPorPrecio.fuenteAlimentacion = (Object.keys(initialConf.fuenteAlimentacion).length == 0) ? fuenteList[0] : initialConf.fuenteAlimentacion;
        configuracionPorPrecio.caja = (Object.keys(initialConf.caja).length == 0) ? cajaList[0] : initialConf.caja;
        configuracionPorPrecio.monitor = (Object.keys(initialConf.monitor).length == 0) ? monitorList[0] : initialConf.monitor;
        configuracionPorPrecio.teclado = (Object.keys(initialConf.teclado).length == 0) ? tecladoList[0] : initialConf.teclado;
        configuracionPorPrecio.raton = (Object.keys(initialConf.raton).length == 0) ? placasList[0] : initialConf.raton;

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
autocompletarBuildRouter.get("/", async (req, res, next) => {
    const presupuesto = req.params.presupuesto;
    const initialConf = req.params.conf;
    const confCompleta = autocompletarBuild(presupuesto, initialConf, segundaMano);
    res.json(confCompleta);
});
exports.autocompletarBuildRouter = autocompletarBuildRouter
