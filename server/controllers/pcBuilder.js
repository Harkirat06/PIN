const pcBuilderRouter = require("express").Router()

const configuration = {
    "placaBase": {
        "type": "PlacaBase",
        "nombre": "ASUS PRIME Z790-P WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "gama": "Alta"
    },
    "CPU": {
        "type": "CPU",
        "marca": "Intel",
        "nombre": "Intel Core i7-13700K 3.4 GHz",
        "gama": "Alta",
        "socket": "Intel LGA 1700",
        "gpu": true,
    },
    "ram": {},
    "disco": {},
    "GPU": {},
    "fuenteAlimentacion": {},
    "monitor": {},
    "raton": {},
    "teclado": {},
    "caja": {},
    "disipador": {},
}

const cpuList = [
    {
        "marca": "Intel",
        "nombre": "Intel Core i7-13700K 3.4 GHz",
        "gama": "Alta",
        "socket": "Intel LGA 1700",
        "gpu": true,
    },
    {
        "marca": "Intel",
        "nombre": "Intel Core i5-13600KF 3.5 GHz",
        "gama": "Media",
        "socket": "Intel LGA 1700",
        "gpu": true,
    },
    {
        "marca": "Intel",
        "nombre": "Intel Core i3-13100 3.4 GHz/4.5 GHz",
        "gama": "Baja",
        "socket": "Intel LGA 1700",
        "gpu": true,
    },
]

const placasList = [
    {
        "marca": "Asus",
        "nombre": "ASUS PRIME Z790-P WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "gama": "Alta",
    },
    {
        "marca": "Asus",
        "nombre": "ASUS TUF GAMING Z790 PLUS WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "gama": "Media",
    },
    {
        "marca": "MSI",
        "nombre": "MSI MAG Z790 TOMAHAWK WIF",
        "tamaño": "ATX",
        "socket": "Intel LGA 1200",
        "gama": "Baja",
    },
] 
const handleCPUPlaca = (component)=> {
    let compatibleComponents = cpuList.filter(p=>p.socket === component.socket && p.gama === component.gama)
    if(component.type === "CPU"){
        compatibleComponents = placasList.filter(p=>p.socket === component.socket && p.gama === component.gama)
    }
    return compatibleComponents
}

pcBuilderRouter.get("/", async (req, res, next) => {
    const data = handleCPUPlaca({
        "type": "CPU",
        "marca": "Intel",
        "nombre": "Intel Core i3-13100 3.4 GHz/4.5 GHz",
        "gama": "Alta",
        "socket": "Intel LGA 1700",
        "gpu": true,
    })
    res.json({
        data
    })
})
module.exports = pcBuilderRouter
