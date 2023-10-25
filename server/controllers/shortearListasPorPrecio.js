const { filtrarListasPorGama } = require("./filtrarListasPorGama");

const shortearListasPorPrecio = (segundaMano) => {
    let [placasList, cpuList, disipadorList, ramList, discoList, gpuList, fuenteList, cajaList, monitorList, tecladoList, ratonList] = filtrarListasPorGama(gama);
    let listas = {
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
        ratonList
    };
    if (segundaMano) {
        return [placasListShorteada, cpuListShorteada, disipadorListShorteada, ramListShorteada, discoListShorteada,
            gpuListShorteada, fuenteListShorteada, cajaListShorteada, monitorListShorteada, tecladoListShorteada, ratonListShorteada] = shorByPrecioSegundaMano(listas);
    } else {
        return [placasListShorteada, cpuListShorteada, disipadorListShorteada, ramListShorteada, discoListShorteada,
            gpuListShorteada, fuenteListShorteada, cajaListShorteada, monitorListShorteada, tecladoListShorteada, ratonListShorteada] = shorByPrecioPrimeraMano(listas);
    }
};
exports.shortearListasPorPrecio = shortearListasPorPrecio;
const shorByPrecioPrimeraMano = (listas) => {
    for (i = 0; i < listas.length; i++) {
        listas[i].sort((a, b) => {
            const precioA = Math.min(a.precio.amazon || Infinity, a.precio.ebay || Infinity);
            const precioB = Math.min(b.precio.amazon || Infinity, b.precio.ebay || Infinity);
            return precioA - precioB;
        });
    }
    return [listas.placasList, listas.cpuList, listas.disipadorList, listas.ramLista, listas.discoList,
    listas.gpuList, listas.fuenteList, listas.cajaList,
    listas.monitorList, listas.tecladoList, listas.ratonList];
};
const shorByPrecioSegundaMano = (listas) => {
    for (i = 0; i < listas.length; i++) {
        listas[i].sort((a, b) => {
            const precioA = Math.min(a.precio.amazon || Infinity, a.precio.ebay || Infinity, a.precio.segundaMano || Infinity);
            const precioB = Math.min(b.precio.amazon || Infinity, b.precio.ebay || Infinity, b.precio.segundaMano || Infinity);
            return precioA - precioB;
        });
    }
    return [listas.placasList, listas.cpuList, listas.disipadorList, listas.ramLista, listas.discoList,
    listas.gpuList, listas.fuenteList, listas.cajaList,
    listas.monitorList, listas.tecladoList, listas.ratonList];
};
