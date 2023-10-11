const pcBuilderRouter = require("express").Router()

const GAMABAJA = 1;
const GAMABAJAMEDIA = 2;
const GAMAMEDIA = 3;
const GAMAMEDIAALTA = 4;
const GAMAALTA = 5;
const GAMAPREMIUM = 6;

const configuration = {
    "placaBase": {
        "type": "PlacaBase",
        "nombre": "ASUS PRIME Z790-P WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "gama": GAMAALTA
    },
    "CPU": {
        "type": "CPU",
        "marca": "Intel",
        "nombre": "Intel Core i7-13700K 3.4 GHz",
        "gama": GAMAALTA,
        "socket": "Intel LGA 1700",
        "gpu": true,
    },
    "ram": {
        "marca": "Corsair",
        "nombre":"Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
        "tipo": "DDR5",
        "capacidad": "32",
        "gama": GAMAMEDIA,
    },
    "disco": {
        "marca": "Samsung",
        "nombre": "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
        "capacidad": "1", //tb
        "tecnologia": "m.2",
        "gama": GAMAALTA,
    },
    "GPU": {
        "marca": "Gigabyte",
        "nombre":"Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
        "gama": GAMAMEDIAALTA,
    },
    "fuenteAlimentacion": {},
    "monitor": {
        "marca": "ASUS",
        "nombre": "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
        "gama": GAMAMEDIA,
    },
    "raton": {},
    "teclado": {},
    "caja": {},
    "disipador": {
        "marca": "Forgeon",
        "nombre": "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
        "tipo": "Liquida",
        "gama": GAMAMEDIA,
    },
}

const cpuList = [
    {
        "marca": "Intel",
        "nombre": "Intel Core i7-13700K 3.4 GHz",
        "gama": GAMAALTA,
        "socket": "Intel LGA 1700",
        "gpu": true,
    },
    {
        "marca": "Intel",
        "nombre": "Intel Core i5-13600KF 3.5 GHz",
        "gama": GAMAMEDIA,
        "socket": "Intel LGA 1700",
        "gpu": false,
    },
    {
        "marca": "Intel",
        "nombre": "Intel Core i3-13100 3.4 GHz/4.5 GHz",
        "gama": GAMABAJA,
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
        "tipoRam": "DDR5",
        "gama": GAMAALTA,
    },
    {
        "marca": "Asus",
        "nombre": "ASUS TUF GAMING Z790 PLUS WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1700",
        "tipoRam": "DDR5",
        "gama": GAMAMEDIA,
    },
    {
        "marca": "MSI",
        "nombre": "MSI MAG Z790 TOMAHAWK WIFI",
        "tamaño": "ATX",
        "socket": "Intel LGA 1200",
        "tipoRam": "DDR5",
        "gama": GAMABAJA,
    },
] 

const gpuList = [
    {
        "marca": "MSI",
        "nombre":"MSI GeForce RTX 3060 VENTUS 2X OC LHR 12GB GDDR6",
        "gama": GAMAMEDIA,
    },
    {
        "marca": "AMD",
        "nombre":"Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
        "gama": GAMAMEDIA,
    },
    {
        "marca": "Gigabyte",
        "nombre":"Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
        "gama": GAMAMEDIAALTA,
    },
]

const ramList = [
    {
        "marca": "Corsair",
        "nombre":"Corsair Vengeance LPX DDR4 3200MHz PC4-25600 32GB 2x16GB CL16",
        "tipo": "DDR4",
        "capacidad": 32, //gb
        "gama": GAMAMEDIA,
    },
    {
        "marca": "Kingston",
        "nombre":"Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
        "tipo": "DDR4",
        "capacidad": 16,
        "gama": GAMABAJAMEDIA,
    },
    {
        "marca": "Corsair",
        "nombre":"Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
        "tipo": "DDR5",
        "capacidad": 32,
        "gama": GAMAMEDIA,
    },
]

const discoList = [
    {
        "marca": "Samsung",
        "nombre": "Samsung 870 QVO SSD 1TB SATA3",
        "capacidad": 1, //tb
        "tecnologia": "Sata",
        "gama": GAMAMEDIA,
    },
    {
        "marca": "Samsung",
        "nombre": "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
        "capacidad": 1,
        "tecnologia": "m.2",
        "gama": GAMAALTA,
    },
    {
        "marca": "Seagate",
        "nombre": "Seagate BarraCuda 3.5 2TB SATA 3",
        "capacidad": 2,
        "tecnologia": "Sata",
        "gama": GAMABAJA,
    },
]

const monitorList = [
    {
        "marca": "ASUS",
        "nombre": "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
        "gama": GAMAMEDIA,
    },
    {
        "marca": "AOC",
        "nombre": "AOC 24B2XHM2 23.8 LED FullHD",
        "gama": GAMABAJA,
    },
    {
        "marca": "LG",
        "nombre": "LG 27GR95QE-B 26.5 OLED QHD 240Hz G-Sync/FreeSync Premium",
        "gama": GAMAPREMIUM,
    },
]

const disipadorList = [
    {
        "marca": "Tempest",
        "nombre": "Tempest Cooler 4Pipes 120mm Ventilador CPU Negro",
        "tipo": "Ventilador",
        "gama": GAMABAJA,
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
        "tipo": "Liquida",
        "gama": GAMAMEDIA,
    },
    {
        "marca": "Forgeon",
        "nombre": "Forgeon Azoth 360 ARGB Kit de Refrigeración Líquida 360mm Negro",
        "tipo": "Liquida",
        "gama": GAMAALTA,
    },
]

const handleCPUPlaca = (component)=> {
    let compatibleComponents = cpuList.filter(p=>p.socket === component.socket && p.gama === component.gama)
    if(component.type === "CPU"){
        compatibleComponents = placasList.filter(p=>p.socket === component.socket && (p.gama === component.gama || p.gama === component.gama - 1 || p.gama === component.gama + 1))
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
