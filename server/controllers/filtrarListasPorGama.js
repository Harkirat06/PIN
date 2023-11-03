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
  let newLista = lista.filter(
    (item) =>
      mapeo[item.gama] == gamaNumerica ||
      mapeo[item.gama] == gamaNumerica - 1 ||
      mapeo[item.gama] == gamaNumerica + 1
  );
  return newLista
};

const filtrarListasPorGama = (gama) => {
  let placasListFiltrada = filtroPorGama(gama, placasList);
  let cpuListFiltrada = filtroPorGama(gama, cpuList);
  let disipadorListFiltrada = filtroPorGama(gama, disipadorList);
  let ramListFiltrada = filtroPorGama(gama, ramList);
  let discoListFiltrada = filtroPorGama(gama, discoList);
  let gpuListFiltrada = filtroPorGama(gama, gpuList);
  let fuenteListFiltrada = filtroPorGama(gama, fuenteList);
  let cajaListFiltrada = filtroPorGama(gama, cajaList);
  let monitorListFiltrada = filtroPorGama(gama, monitorList);
  let tecladoListFiltrada = filtroPorGama(gama, tecladoList);
  let ratonListFiltrada = filtroPorGama(gama, ratonList);

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
