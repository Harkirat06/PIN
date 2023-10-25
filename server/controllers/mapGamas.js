const { gamaBaja, gamaBajaMedia, gamaMedia, gamaMediaAlta, gamaAlta, gamaPremium } = require("./pcBuilder");

const mapList = (lista) => {
    return lista.map((item => {
        switch (item.gama) {
            case gamaBaja: item.gama = "Baja"; break;
            case gamaBajaMedia: item.gama = "BajaMedia"; break;
            case gamaMedia: item.gama = "Media"; break;
            case gamaMediaAlta: item.gama = "MediaAlta"; break;
            case gamaAlta: item.gama = "Alta"; break;
            case gamaPremium: item.gama = "Premium"; break;
            default: break;
        }
        return item;
    }));
};
const mapGamas = (listas) => {
    placasListMapeada = mapList(listas.placasList);
    cpuListMapeada = mapList(listas.cpuList);
    disipadorListMapeada = mapList(listas.disipadorList);
    ramListMapeada = mapList(listas.ramList);
    discoListMapeada = mapList(listas.discoList);
    gpuListMapeada = mapList(listas.gpuList);
    fuenteListMapeada = mapList(listas.fuenteList);
    cajaListMapeada = mapList(listas.cajaList);
    monitorListMapeada = mapList(listas.monitorList);
    tecladoListMapeada = mapList(listas.tecladoList);
    ratonListMapeada = mapList(listas.ratonList);
    return [placasListMapeada, cpuListMapeada, disipadorListMapeada, ramListMapeada, discoListMapeada,
        gpuListMapeada, fuenteListMapeada, cajaListMapeada, monitorListMapeada, tecladoListMapeada, ratonListMapeada];
};
exports.mapGamas = mapGamas;
