const pcBuilderRouter = require("express").Router()
const {buildsGamaBaja, buildsGamaMedia, buildsGamaAlta, emptyConfiguration, configuration, cpuList,
        placasList, ramList, cajaList, gpuList, disipadorList, discoList, monitorList, fuenteList,
            ratonList, tecladoList} = require("../datos/listas")

const gamaBaja = 1;
const gamaBajaMedia = 2;
const gamaMedia = 3;
const gamaMediaAlta = 4;
const gamaAlta = 5;
const gamaPremium = 6;

const potenciaExtra = 50; //para calcular la potencia solo tengo en cuenta la cpu y la gpu. todo lo demas entra en este extra, un poco arbitrario.

const mapList = (lista)=>{
    return lista.map((item => {
        switch(item.gama){
            case gamaBaja: item.gama =  "Baja"; break;
            case gamaBajaMedia: item.gama =  "BajaMedia"; break;
            case gamaMedia: item.gama =  "Media"; break;
            case gamaMediaAlta: item.gama =  "MediaAlta"; break;
            case gamaAlta: item.gama =  "Alta"; break;
            case gamaPremium: item.gama = "Premium"; break;
            default: break
        }
        return item
    }))
}

const mapGamas = (listas)=>{
    placasListMapeada = mapList(listas.placasList)
    cpuListMapeada = mapList(listas.cpuList)
    disipadorListMapeada = mapList(listas.disipadorList)
    ramListMapeada = mapList(listas.ramList)
    discoListMapeada = mapList(listas.discoList)
    gpuListMapeada = mapList(listas.gpuList)
    fuenteListMapeada = mapList(listas.fuenteList)
    cajaListMapeada = mapList(listas.cajaList)
    monitorListMapeada = mapList(listas.monitorList)
    tecladoListMapeada = mapList(listas.tecladoList)
    ratonListMapeada = mapList(listas.ratonList)
    return [placasListMapeada, cpuListMapeada, disipadorListMapeada, ramListMapeada, discoListMapeada,
            gpuListMapeada, fuenteListMapeada, cajaListMapeada, monitorListMapeada, tecladoListMapeada, ratonListMapeada]
}

const filtroPorGama = (gama, lista)=>{
    return lista.filter(item => item.gama === gama || item.gama === gama - 1 || item.gama === gama + 1)
}


const filtrarListasPorGama = (gama)=>{
    placasListFiltrada = filtroPorGama(gama, placasList)
    cpuListFiltrada = filtroPorGama(gama, cpuList)
    disipadorListFiltrada = filtroPorGama(gama, disipadorList)
    ramListFiltrada = filtroPorGama(gama, ramList)
    discoListFiltrada = filtroPorGama(gama, discoList)
    gpuListFiltrada = filtroPorGama(gama, gpuList)
    fuenteListFiltrada = filtroPorGama(gama, fuenteList)
    cajaListFiltrada = filtroPorGama(gama, cajaList)
    monitorListFiltrada = filtroPorGama(gama, monitorList)
    tecladoListFiltrada = filtroPorGama(gama, tecladoList)
    ratonListFiltrada = filtroPorGama(gama, ratonList)
    let list = {
        "placasList" : placasListFiltrada,
        "cpuList" : cpuListFiltrada,
        "disipadorList" : disipadorListFiltrada,
        "ramList" : ramListFiltrada,
        "discoList" : discoListFiltrada,
        "gpuList" : gpuListFiltrada,
        "fuenteList" : fuenteListFiltrada,
        "cajaList" : cajaListFiltrada,
        "monitorList" : monitorListFiltrada,
        "tecladoList" : tecladoListFiltrada,
        "ratonList" : ratonListFiltrada
    }
    return [placasListFiltrada, cpuListFiltrada, disipadorListFiltrada, ramListFiltrada, discoListFiltrada,
            gpuListFiltrada, fuenteListFiltrada, cajaListFiltrada, monitorListFiltrada, tecladoListFiltrada, ratonListFiltrada] = mapGamas(list)
}

const handleCPU = (lista, placaBase, ram) => {
    if(placaBase){
        lista = lista.filter(item => item.socket === placaBase.socket)
    }

    if(ram){
        lista = lista.filter(item => item.tipoRam == ram.tipo)
    }

    return lista
}

const handlePlacaBase = (lista, cpu, ram, m2, sata) => {
    if(cpu){
        lista = lista.filter(item => item.socket === cpu.socket)
    }

    if(ram){
        lista = lista.filter(item => item.tipoRam == ram.tipo)
    }

    if(m2.length !== 0){
        lista = lista.filter(item => item.numeroM2 >= m2.length)
    }

    if(sata.length !== 0){
        lista = lista.filter(item => item.numeroSata >= sata.length)
    }
    return lista
}

const handleRam = (lista, placaBase, cpu) => {
    if(placaBase){
        lista = lista.filter(item=> item.tipo == placaBase.tipoRam)
    }

    if(cpu){
        lista = lista.filter(item=> item.tipo == cpu.tipoRam)
    }
}

const handleDisco = (lista, placaBase, m2, sata) => {
    if(placaBase){
        if(m2.length >= placaBase.numeroM2){
            lista = lista.filter(item => item.tipo == "Sata")
        }
        if(sata.length >= placaBase.numeroSata){
            lista = lista.filter(item => item.tipo == "m.2")
        }
        return lista
    }
    
    if(m2.length >= 2){
        lista = lista.filter(item => item.tipo == "Sata")
    }
    if(sata.length >= 2){
        lista = lista.filter(item => item.tipo == "m.2")
    }
    return lista  
}

const handleDisipador = (lista, cpu) => {
    if (cpu && !cpu.ventilador) {
        return lista;
    } else {
        return [];
    }
}

const handleFuente = (lista, cpu, gpu) => {
    if(gpu.potenciaRecomendada){
        lista.filter(item => item.potencia >= gpu.potenciaRecomendada);
    } else if (cpu && gpu) {
        lista.filter(item => (item.potencia * 80 / 100) >= (gpu.consumo + cpu.consumo + potenciaExtra))
    }
    return lista;
}

const handleConfiguacion = (config)=>{
    let configObjects = Object.values(config);
    if( configObjects.length !== 0){
        let gama = configObjects[0].gama
        let [placasList, cpuList, disipadorList, ramList, discoList,
        gpuList, fuenteList, cajaList, monitorList, tecladoList,
        ratonList] = filtrarListasPorGama(gama)
        placasList = handlePlacaBase(placasList, config.cpu, config.m2, config.sata)
        cpuList = handleCPU(cpuList, config.placaBase, config,ram)
        ramList = handleRam(ramList, config.placaBase, config.cpu)
        discoList = handleDisco(discoList, config.placaBase, config.m2, config.sata)
        disipadorList = handleDisipador(disipadorList, config.cpu)
        fuenteList = handleFuente(fuenteList, config.cpu, config.gpu)
        return [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList]
    }else{
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
            ratonList
        }
        return [placasLista, cpuLista, disipadorLista, ramLista, discoLista,
            gpuLista, fuenteLista, cajaLista, monitorLista, tecladoLista,
            ratonLista] = mapGamas(list)
    }
}

const creaBuildPorPrecio = (presupuesto, segundaMano = false) => {
    let configuracionPorPrecio = {} 
    let costeBuild = 0;
    for (let gamaBuild = gamaPremium; gamaBuild > 0; gamaBuild - 1) {
        let [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList] = filtrarListasPorGama(gamaBuild)
        [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList] = shortearListasPorPrecio(segundaMano)
        configuracionPorPrecio.placaBase = placasList[0]
        cpuList = handleCPU(cpuList, configuracionPorPrecio.placaBase, configuracionPorPrecio.ram)
        configuracionPorPrecio.cpu = cpuList[0]
        disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu)
        configuracionPorPrecio.ram = disipadorList[0]
        ramList = handleRam(ramList, configuracionPorPrecio.placaBase, configuracionPorPrecio.cpu)
        configuracionPorPrecio.m2 = ramList[0]
        discoList = handleDisco(discoList, configuracionPorPrecio.placaBase, configuracionPorPrecio.m2, configuracionPorPrecio.sata)
        configuracionPorPrecio.sata = discoList[0]
        configuracionPorPrecio.gpu = gpuList[0]
        fuenteList = handleFuente(fuenteList, configuracionPorPrecio.cpu, configuracionPorPrecio.gpu)
        configuracionPorPrecio.fuenteAlimentacion = fuenteList[0]
        configuracionPorPrecio.caja = cajaList[0]
        configuracionPorPrecio.monitor = onitorList[0]
        configuracionPorPrecio.teclado = tecladoList[0]
        configuracionPorPrecio.raton = ratonList[0]
        if (segundaMano) {
            configuracionPorPrecio.forEach(element => {
                costeBuild += Math.min(element.precio.amazon || Infinity, element.precio.ebay || Infinity, element.precio.segundaMano || Infinity);
            })
            if (costeBuild <= presupuesto) {
                return configuracionPorPrecio
            } else {
                configuracionPorPrecio = {}
                costeBuild = 0
            }
        } else {
            configuracionPorPrecio.forEach(element => {
                costeBuild += Math.min(element.precio.amazon || Infinity, element.precio.ebay || Infinity);
            })
            if (costeBuild <= presupuesto) {
                return configuracionPorPrecio
            } else {
                configuracionPorPrecio = {}
                costeBuild = 0
            }
        }
    }
    return configuracionPorPrecio
}

const shortearListasPorPrecio = (segundaMano) => {
    let [placasList, cpuList, disipadorList, ramList, discoList,
        gpuList, fuenteList, cajaList, monitorList, tecladoList,
        ratonList] = filtrarListasPorGama(gama)
    let list = {
        "placasList" : placasListShorteada,
        "cpuList" : cpuListShorteada,
        "disipadorList" : disipadorListShorteada,
        "ramList" : ramListShorteada,
        "discoList" : discoListShorteada,
        "gpuList" : gpuListShorteada,
        "fuenteList" : fuenteListShorteada,
        "cajaList" : cajaListShorteada,
        "monitorList" : monitorListShorteada,
        "tecladoList" : tecladoListShorteada,
        "ratonList" : ratonListShorteada
    }
    if (segundaMano) {
        return [placasListShorteada, cpuListShorteada, disipadorListShorteada, ramListShorteada, discoListShorteada,
            gpuListShorteada, fuenteListShorteada, cajaListShorteada, monitorListShorteada, tecladoListShorteada, ratonListShorteada] = shorByPrecioSegundaMano(lista)
    } else {
        return [placasListShorteada, cpuListShorteada, disipadorListShorteada, ramListShorteada, discoListShorteada,
            gpuListShorteada, fuenteListShorteada, cajaListShorteada, monitorListShorteada, tecladoListShorteada, ratonListShorteada] = shorByPrecioPrimeraMano(lista)
    }
}

const shorByPrecioPrimeraMano = (lista) => {
    lista.sort((a, b) => {
        const precioA = Math.min(a.precio.amazon || Infinity, a.precio.ebay || Infinity);
        const precioB = Math.min(b.precio.amazon || Infinity, b.precio.ebay || Infinity);
        return precioA - precioB;
      })
}

const shorByPrecioSegundaMano = (lista) => {
    lista.sort((a, b) => {
        const precioA = Math.min(a.precio.amazon || Infinity, a.precio.ebay || Infinity, a.precio.segundaMano || Infinity);
        const precioB = Math.min(b.precio.amazon || Infinity, b.precio.ebay || Infinity, b.precio.segundaMano || Infinity);
        return precioA - precioB;
      })
}

function getRandomNumberExclusive(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min)) + min;
    return randomNumber;
  }

const buildPorGama =(gama)=>{
    switch (gama){
        case "baja": return buildsGamaBaja[getRandomNumberExclusive(0,buildsGamaBaja.length)]
        case "media": return buildsGamaMedia[getRandomNumberExclusive(0,buildsGamaMedia.length)]
        case "alta": return buildsGamaAlta[getRandomNumberExclusive(0,buildsGamaAlta.length)]
        default: return {}
    } 
}

const autocompletar = (presupuesto, initialConf, segundaMano = false) => {
    let configuracionPorPrecio = {}
    let costeBuild = 0;
    for (let gamaBuild = gamaPremium; gamaBuild > 0; gamaBuild - 1) {
        let [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList] = filtrarListasPorGama(gamaBuild)
            [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList] = shortearListasPorPrecio(segundaMano)

        configuracionPorPrecio.placaBase = (Object.keys(initialConf.placaBase).length == 0) ? placasList[0] : initialConf.placaBase

        cpuList = handleCPU(cpuList, initialConf.placaBase, configuracionPorPrecio.ram)
        configuracionPorPreciocpu = (Object.keys(initialConf.cpu).length == 0) ? cpuList[0] : initialConf.cpu

        disipadorList = handleDisipador(disipadorList, configuracionPorPrecio.cpu)
        configuracionPorPrecio.disipador = (Object.keys(initialConf.disipador).length == 0) ? disipadorList[0] : initialConf.disipador

        ramList = handleRam(ramList, configuracionPorPrecio.placaBase, configuracionPorPrecio.cpu)
        configuracionPorPrecio.ram = (Object.keys(initialConf.ram).length == 0) ? ramList[0] : initialConf.ram

        discoList = handleDisco(discoList, configuracionPorPrecio.placaBase, configuracionPorPrecio.m2, configuracionPorPrecio.sata)
        configuracionPorPrecio.disco = (Object.keys(initialConf.disco).length == 0) ? discoList[0] : initialConf.disco
        configuracionPorPrecio.gpu = (Object.keys(initialConf.gpu).length == 0) ? gpuList[0] : initialConf.gpu

        fuenteList = handleFuente(fuenteList, configuracionPorPrecio.cpu, configuracionPorPrecio.gpu)
        configuracionPorPrecio.fuenteAlimentacion = (Object.keys(initialConf.fuenteAlimentacion).length == 0) ? fuenteList[0] : initialConf.fuenteAlimentacion
        configuracionPorPrecio.caja = (Object.keys(initialConf.caja).length == 0) ? cajaList[0] : initialConf.caja
        configuracionPorPrecio.monitor = (Object.keys(initialConf.monitor).length == 0) ? monitorList[0] : initialConf.monitor
        configuracionPorPrecio.teclado = (Object.keys(initialConf.teclado).length == 0) ? tecladoList[0] : initialConf.teclado
        configuracionPorPrecio.raton = (Object.keys(initialConf.raton).length == 0) ? placasList[0] : initialConf.raton

        if (segundaMano) {
            configuracionPorPrecio.forEach(element => {
                costeBuild += Math.min(element.precio.amazon || Infinity, element.precio.ebay || Infinity, element.precio.segundaMano || Infinity);
            })
            if (costeBuild <= presupuesto) {
                return configuracionPorPrecio
            } else {
                configuracionPorPrecio = {}
                costeBuild = 0
            }
        } else {
            configuracionPorPrecio.forEach(element => {
                costeBuild += Math.min(element.precio.amazon || Infinity, element.precio.ebay || Infinity);
            })
            if (costeBuild <= presupuesto) {
                return configuracionPorPrecio
            } else {
                configuracionPorPrecio = {}
                costeBuild = 0
            }
        }
    }
    return configuracionPorPrecio
}



pcBuilderRouter.get("/", async (req, res, next) => {
    const [placasList, cpuList, disipadorList, ramList, discoList,
        gpuList, fuenteList, cajaList, monitorList, tecladoList,
        ratonList] = handleConfiguacion(emptyConfiguration)

    
    
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
        ratonList 
    })
})

pcBuilderRouter.get("/:gama", async (req, res, next) => {
    const gama = req.params.gama
    const conf = buildPorGama(gama)
    res.json(conf)
})

pcBuilderRouter.get("/:precio", async (req, res, next) => {
    const presupuesto = req.params.presupuesto
    const conf = creaBuildPorPrecio(presupuesto, segundaMano)
    res.json(conf)
})

pcBuilder.get("/:autocompletar", async (req, res, next) => {
    const presupuesto = req.params.presupuesto
    const initialConf = req.params.conf
    const confCompleta = autocompletar(presupuesto, initialConf, segundaMano)
    res.json(confCompleta)
})


module.exports = pcBuilderRouter
