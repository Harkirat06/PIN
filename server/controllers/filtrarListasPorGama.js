const {
  cpuList,
  placasList,
  ramList,
  cajaList,
  gpuList,
  disipadorList,
  discoList,
  monitorList,
  fuenteList,
  ratonList,
  tecladoList,
} = require("../datos/listas");
const { mapeo } = require("./gamasEnum");

const filtroPorGama = (gama, lista) => {
  const gamaNumerica = mapeo[gama];
  return lista.filter(
    (item) =>
      item.gama === gamaNumerica ||
      item.gama === gamaNumerica - 1 ||
      item.gama === gamaNumerica + 1
  );
};

const filtrarListasPorGama = (gama) => {
  placasListFiltrada = filtroPorGama(gama, placasList);
  cpuListFiltrada = filtroPorGama(gama, cpuList);
  disipadorListFiltrada = filtroPorGama(gama, disipadorList);
  ramListFiltrada = filtroPorGama(gama, ramList);
  discoListFiltrada = filtroPorGama(gama, discoList);
  gpuListFiltrada = filtroPorGama(gama, gpuList);
  fuenteListFiltrada = filtroPorGama(gama, fuenteList);
  cajaListFiltrada = filtroPorGama(gama, cajaList);
  monitorListFiltrada = filtroPorGama(gama, monitorList);
  tecladoListFiltrada = filtroPorGama(gama, tecladoList);
  ratonListFiltrada = filtroPorGama(gama, ratonList);
  let list = {
    placasList: placasListFiltrada,
    cpuList: cpuListFiltrada,
    disipadorList: disipadorListFiltrada,
    ramList: ramListFiltrada,
    discoList: discoListFiltrada,
    gpuList: gpuListFiltrada,
    fuenteList: fuenteListFiltrada,
    cajaList: cajaListFiltrada,
    monitorList: monitorListFiltrada,
    tecladoList: tecladoListFiltrada,
    ratonList: ratonListFiltrada,
  };
  return [
    placasListFiltrada,
    cpuListFiltrada,
    disipadorListFiltrada,
    ramListFiltrada,
    discoListFiltrada,
    gpuListFiltrada,
    fuenteListFiltrada,
    cajaListFiltrada,
    monitorListFiltrada,
    tecladoListFiltrada,
    ratonListFiltrada,
  ];
};
exports.filtrarListasPorGama = filtrarListasPorGama;
exports.filtroPorGama = filtroPorGama
