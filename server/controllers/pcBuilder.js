const pcBuilderRouter = require("express").Router()

const gamaBaja = 1;
const gamaBajaMedia = 2;
const gamaMedia = 3;
const gamaMediaAlta = 4;
const gamaAlta = 5;
const gamaPremium = 6;

const emptyConfiguration = {}

const configuration = {
    "placaBase": {
        "type": "PlacaBase",
        "nombre": "ASUS PRIME Z790-P WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "gama": gamaAlta
    },
    "CPU": {
        "type": "CPU",
        "marca": "Intel",
        "nombre": "Intel Core i7-13700K 3.4 GHz",
        "gama": gamaAlta,
        "socket": "Intel LGA 1700",
        "gpu": true
    },
    "ram": {
        "marca": "Corsair",
        "nombre":"Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
        "tipo": "DDR5",
        "capacidad": 32,
        "gama": gamaMedia
    },
    "disco": {
        "marca": "Samsung",
        "nombre": "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
        "capacidad": 1,
        "tecnologia": "m.2",
        "gama": gamaAlta
    },
    "GPU": {
        "marca": "Gigabyte",
        "nombre":"Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
        "gama": gamaMediaAlta
    },
    "fuenteAlimentacion": {
        "marca": "Forgeon",
        "nombre": "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
        "potencia": "850",
        "ochetaplus": true,
        "gama": gamaAlta
    },
    "monitor": {
        "marca": "ASUS",
        "nombre": "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
        "gama": gamaMedia
    },
    "caja": {
        "marca": "Tempest",
        "nombre": "Tempest Umbra RGB Torre ATX Blanca",
        "gama": gamaAlta
    },
    "disipador": {
        "marca": "Forgeon",
        "nombre": "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
        "tipo": "Liquida",
        "gama": gamaMedia
    }
}

const cpuList = [
    {
        "marca": "Intel",
        "nombre": "Intel Core i7-13700K 3.4 GHz",
        "gama": gamaAlta,
        "socket": "Intel LGA 1700",
        "gpu": true
    },
    {
        "marca": "Intel",
        "nombre": "Intel Core i5-13600KF 3.5 GHz",
        "gama": gamaMedia,
        "socket": "Intel LGA 1700",
        "gpu": false
    },
    {
        "marca": "Intel",
        "nombre": "Intel Core i3-13100 3.4 GHz/4.5 GHz",
        "gama": gamaBaja,
        "socket": "Intel LGA 1700",
        "gpu": true
    }
]

const placasList = [
    {
        "marca": "Asus",
        "nombre": "ASUS PRIME Z790-P WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "tipoRam": "DDR5",
        "gama": gamaAlta,
        "numero m2": 2  
    },
    {
        "marca": "Asus",
        "nombre": "ASUS TUF GAMING Z790 PLUS WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "tipoRam": "DDR5",
        "gama": gamaMedia,
        "numero m2": 2  
    },
    {
        "marca": "MSI",
        "nombre": "MSI MAG Z790 TOMAHAWK WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1200",
        "tipoRam": "DDR5",
        "gama": gamaBaja,
        "numero m2": 2  
    }
] 

const gpuList = [
    {
        "marca": "MSI",
        "nombre":"MSI GeForce RTX 3060 VENTUS 2X OC LHR 12GB GDDR6",
        "gama": gamaMedia
    },
    {
        "marca": "AMD",
        "nombre":"Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
        "gama": gamaMedia
    },
    {
        "marca": "Gigabyte",
        "nombre":"Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
        "gama": gamaMediaAlta
    }
]

const ramList = [
    {
        "marca": "Corsair",
        "nombre":"Corsair Vengeance LPX DDR4 3200MHz PC4-25600 32GB 2x16GB CL16",
        "tipo": "DDR4",
        "capacidad": 32, //gb
        "gama": gamaMedia
    },
    {
        "marca": "Kingston",
        "nombre":"Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
        "tipo": "DDR4",
        "capacidad": 16,
        "gama": gamaBajaMedia
    },
    {
        "marca": "Corsair",
        "nombre":"Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
        "tipo": "DDR5",
        "capacidad": 32,
        "gama": gamaMedia
    }
]

const discoList = [
    {
        "marca": "Samsung",
        "nombre": "Samsung 870 QVO SSD 1TB SATA3",
        "capacidad": 1, //tb
        "tecnologia": "Sata",
        "gama": gamaMedia
    },
    {
        "marca": "Samsung",
        "nombre": "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
        "capacidad": 1,
        "tecnologia": "m.2",
        "gama": gamaAlta
    },
    {
        "marca": "Seagate",
        "nombre": "Seagate BarraCuda 3.5 2TB SATA 3",
        "capacidad": 2,
        "tecnologia": "Sata",
        "gama": gamaBaja
    }
]

const monitorList = [
    {
        "marca": "ASUS",
        "nombre": "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
        "gama": gamaMedia
    },
    {
        "marca": "AOC",
        "nombre": "AOC 24B2XHM2 23.8 LED FullHD",
        "gama": gamaBaja
    },
    {
        "marca": "LG",
        "nombre": "LG 27GR95QE-B 26.5 OLED QHD 240Hz G-Sync/FreeSync Premium",
        "gama": gamaPremium
    }
]

const disipadorList = [
    {
        "marca": "Tempest",
        "nombre": "Tempest Cooler 4Pipes 120mm Ventilador CPU Negro",
        "tipo": "Ventilador",
        "gama": gamaBaja
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
        "tipo": "Liquida",
        "gama": gamaMedia
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Azoth 360 ARGB Kit de Refrigeración Líquida 360mm Negro",
        "tipo": "Liquida",
        "gama": gamaAlta
    }
]

const cajaList = [
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Mithril ARGB Mesh Torre ATX Negra",
        "gama": gamaMedia
    },
    {
        "marca": "Tempest",
        "nombre": "Tempest Umbra RGB Torre ATX Blanca",
        "gama": gamaAlta
    },
    {
        "marca": "Nox",
        "nombre": "Nox Hummer Void USB 3.0 Negro",
        "gama": gamaBaja
    }
]

const fuenteList = [
    {
        "marca": "Tempest",
        "nombre": "Tempest PSU PRO 650W 80+ Bronze Fuente de Alimentación",
        "potencia": "650", //W
        "ochetaplus": true,
        "gama": gamaMedia
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
        "potencia": "850",
        "ochetaplus": true,
        "gama": gamaAlta
    },
    {
        "marca": "Tempest",
        "nombre": "Tempest PSU PRO 650W 80+ Bronze Fuente de Alimentación",
        "potencia": "750",
        "ochetaplus": false,
        "gama": gamaBaja
    }
]

const ratonList = [
    {
        "marca": "Tempest",
        "nombre": "Tempest X8 Keeper RGB Ratón Gaming 10.000 DPI Negro",
        "gama": gamaMedia
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Vendetta Ratón Gaming RGB 16000DPI Negro",
        "gama": gamaBaja
    },
    {
        "marca": "Newskill",
        "nombre": "Newskill Eos Ivory Ratón Gaming Professional RGB 16000DPI Blanco",
        "gama": gamaAlta
    }
]

const tecladoList = [
    {
        "marca": "Tempest",
        "nombre": "Tempest Cataclysm Combo 3 en 1 Gaming Teclado",
        "gama": gamaMedia,
        "mecanico": false
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Clutch Teclado Gaming RGB 60% Switch Blue",
        "gama": gamaBaja,
        "mecanico": true
    },
    {
        "marca": "Newskill",
        "nombre": "Newskill Suiko Teclado Mecánico Gaming Full RGB Switch Kailh Blue",
        "gama": gamaAlta,
        "mecanico": true
    }
]

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
    return [placasListFiltrada, cpuListFiltrada, disipadorListFiltrada, ramListFiltrada, discoListFiltrada,
            gpuListFiltrada, fuenteListFiltrada, cajaListFiltrada, monitorListFiltrada, tecladoListFiltrada, ratonListFiltrada]
}

const handleConfiguacion = (config)=>{
    let configObjects = Object.values(config);
    console.log(configObjects.length)
    if( configObjects.length !== 0){
        let gama = configObjects[0].gama
        const [placasList, cpuList, disipadorList, ramList, discoList,
        gpuList, fuenteList, cajaList, monitorList, tecladoList,
        ratonList] = filtrarListasPorGama(gama)
        return [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList]
    }else{
        return [placasList, cpuList, disipadorList, ramList, discoList,
            gpuList, fuenteList, cajaList, monitorList, tecladoList,
            ratonList]
    }
}

const handleCPUPlaca = (component)=> {
    let compatibleComponents = cpuList.filter(p=>p.socket === component.socket && p.gama === component.gama)
    if(component.type === "CPU"){
        compatibleComponents = placasList.filter(p=>p.socket === component.socket && (p.gama === component.gama || p.gama === component.gama - 1 || p.gama === component.gama + 1))
    }
    return compatibleComponents
}

pcBuilderRouter.get("/", async (req, res, next) => {
    const [placasList, cpuList, disipadorList, ramList, discoList,
        gpuList, fuenteList, cajaList, monitorList, tecladoList,
        ratonList] = handleConfiguacion(configuration)
    
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
module.exports = pcBuilderRouter
