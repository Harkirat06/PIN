const pcBuilderRouter = require("express").Router()

const configuration = {
    "placaBase": {
        "nombre": "ASUS PRIME Z790-P WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "gama": "Alta"
    },
    "CPU": {
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

const placas = [
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
const handleCPU = (cpu)=> {
    const motherBoards = placas.filter(p=>p.socket === "Intel LGA 1700" && p.gama === "Alta")
    return motherBoards
} 

pcBuilderRouter.get("/", async (req, res, next) => {
    const data = handleCPU({
        "marca": "Intel",
        "nombre": "Intel Core i3-13100 3.4 GHz/4.5 GHz",
        "gama": "Baja",
        "socket": "Intel LGA 1700",
        "gpu": true,
    })
    res.json({
        data
    })
})
module.exports = pcBuilderRouter
