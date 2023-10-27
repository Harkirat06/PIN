const pcBuilderRouter = require("express").Router();
const { emptyConfiguration } = require("../datos/listas");
const { filtrarListasPorGama } = require("./filtrarListasPorGama");
const { mapGamas } = require("./mapGamas");
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

const potenciaExtra = 50; //para calcular la potencia solo tengo en cuenta la cpu y la gpu. todo lo demas entra en este extra, un poco arbitrario.

const handleCPU = (lista, placaBase, ram) => {
  if (placaBase) {
    lista = lista.filter((item) => item.socket === placaBase.socket);
  }

  if (ram) {
    lista = lista.filter((item) => item.tipoRam == ram.tipo);
  }

  return lista;
};

const handlePlacaBase = (lista, cpu, ram, m2, sata) => {
  if (cpu) {
    lista = lista.filter((item) => item.socket === cpu.socket);
  }

  if (ram) {
    lista = lista.filter((item) => item.tipoRam == ram.tipo);
  }

  if (m2.length !== 0) {
    lista = lista.filter((item) => item.numeroM2 >= m2.length);
  }

  if (sata.length !== 0) {
    lista = lista.filter((item) => item.numeroSata >= sata.length);
  }
  return lista;
};

const handleRam = (lista, placaBase, cpu) => {
  if (placaBase) {
    lista = lista.filter((item) => item.tipo == placaBase.tipoRam);
  }

  if (cpu) {
    lista = lista.filter((item) => item.tipo == cpu.tipoRam);
  }
};

const handleDisco = (lista, placaBase, m2, sata) => {
  if (placaBase) {
    if (m2.length >= placaBase.numeroM2) {
      lista = lista.filter((item) => item.tipo == "Sata");
    }
    if (sata.length >= placaBase.numeroSata) {
      lista = lista.filter((item) => item.tipo == "m.2");
    }
    return lista;
  }

  if (m2.length >= 2) {
    lista = lista.filter((item) => item.tipo == "Sata");
  }
  if (sata.length >= 2) {
    lista = lista.filter((item) => item.tipo == "m.2");
  }
  return lista;
};

const handleDisipador = (lista, cpu) => {
  if (cpu && !cpu.ventilador) {
    return lista;
  } else {
    return [];
  }
};

const handleFuente = (lista, cpu, gpu) => {
  if (gpu.potenciaRecomendada) {
    lista.filter((item) => item.potencia >= gpu.potenciaRecomendada);
  } else if (cpu && gpu) {
    lista.filter(
      (item) =>
        (item.potencia * 80) / 100 >= gpu.consumo + cpu.consumo + potenciaExtra
    );
  }
  return lista;
};

const handleConfiguacion = (config) => {
  let configObjects = Object.values(config);
  if (configObjects.length !== 0) {
    let gama = configObjects[0].gama;
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
    ] = filtrarListasPorGama(gama);
    placasList = handlePlacaBase(
      placasList,
      config.cpu,
      config.m2,
      config.sata
    );
    cpuList = handleCPU(cpuList, config.placaBase, config, ram);
    ramList = handleRam(ramList, config.placaBase, config.cpu);
    discoList = handleDisco(
      discoList,
      config.placaBase,
      config.m2,
      config.sata
    );
    disipadorList = handleDisipador(disipadorList, config.cpu);
    fuenteList = handleFuente(fuenteList, config.cpu, config.gpu);
    return [
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
    ];
  } else {
    let list = {
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
    };
    return ([
      placasLista,
      cpuLista,
      disipadorLista,
      ramLista,
      discoLista,
      gpuLista,
      fuenteLista,
      cajaLista,
      monitorLista,
      tecladoLista,
      ratonLista,
    ] = mapGamas(list));
  }
};

pcBuilderRouter.get("/", async (req, res) => {
  const [
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
  ] = handleConfiguacion(emptyConfiguration);
  res.json({
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
  });
});

module.exports = {
  pcBuilderRouter,
  handleFuente,
  handleDisipador,
  handleDisco,
  handleRam,
  handleCPU
};
