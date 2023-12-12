const {Schema, model} = require("mongoose")
const cpuListSchema = new Schema({
    marca: String,
    nombre: String,
    gama: String,
    socket: String,
    consumo: Number,
    tipoRam: String,
    ventilador: Boolean,
    gpu: Boolean,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String
})

const placasListSchema = new Schema({
    marca: String,
    nombre: String,
    socket: String,
    tipoRam: String,
    gama: String,
    numeroM2: Number,
    numeroSata: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String
})

const gpuListSchema = new Schema({
    marca: String,
    nombre: String,
    consumo: Number,
    potenciaRecomendada: Number,
    gama: String,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String
})

const ramListSchema = new Schema({
    marca: String,
    nombre: String,
    tipo: String,
    capacidad: Number,
    gama: String,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String
})

const discoListSchema = new Schema({
    marca: String,
    nombre: String,
    capacidad: Number,
    tecnologia: String,
    gama: String,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String
})

const monitorListSchema = new Schema({
    marca: String,
    nombre: String,
    gama: String,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String,
})

const disipadorListSchema = new Schema({
    marca: String,
    nombre: String,
    gama: String,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    link: {
      amazon: String,
      ebay: String,
    },
    imagen: String,
})

const cajaListSchema = new Schema({
  marca: String,
  nombre: String,
  gama: String,
  precio: {
    segundaMano: Number,
    amazon: Number,
    ebay: Number,
  },
  link: {
    amazon: String,
    ebay: String,
  },
  imagen: String,
})

const fuenteListSchema = new Schema({
  marca: String,
  nombre: String,
  potencia: Number,
  gama: String,
  precio: {
    segundaMano: Number,
    amazon: Number,
    ebay: Number,
  },
  link: {
    amazon: String,
    ebay: String,
  },
  imagen: String,
})

const ratonListSchema = new Schema({
  marca: String,
  nombre: String,
  gama: String,
  precio: {
    segundaMano: Number,
    amazon: Number,
    ebay: Number,
  },
  link: {
    amazon: String,
    ebay: String,
  },
  imagen: String,
})

const tecladoListSchema = new Schema({
  marca: String,
  nombre: String,
  gama: String,
  precio: {
    segundaMano: Number,
    amazon: Number,
    ebay: Number,
  },
  link: {
    amazon: String,
    ebay: String,
  },
  imagen: String,
})

const buildListSchema = new Schema({
  tipo: String,
  placas: placasListSchema,
  cpu: cpuListSchema,
  ram: ramListSchema,
  m2: discoListSchema,
  sata: discoListSchema,
  gpu: gpuListSchema,
  fuente: fuenteListSchema,
  monitor: monitorListSchema,
  caja: cajaListSchema,
  disipador: disipadorListSchema,
})

cpuListSchema.set("toJSON",{
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
   }
})

placasListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

gpuListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

ramListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

discoListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

monitorListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

disipadorListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

cajaListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

fuenteListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

ratonListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

tecladoListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

buildListSchema.set("toJSON",{
  transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id
     delete returnedObject._id
     delete returnedObject.__v
  }
})

const cpu = model("cpuList", cpuListSchema)

const placas = model("placasList", placasListSchema)

const gpu = model("gpuList", gpuListSchema)

const ram = model("ramList", ramListSchema)

const disco = model("discoList", discoListSchema)

const monitor = model("monitorList", monitorListSchema)

const disipador = model("disipadorList", disipadorListSchema)

const caja = model("cajaList", cajaListSchema)

const fuente = model("fuenteList", fuenteListSchema)

const raton = model("ratonList", ratonListSchema)

const teclado = model("tecladoList", tecladoListSchema)

const build = model("buildList", buildListSchema)

module.exports = {cpu, placas, gpu, ram, disco, monitor, disipador, caja, fuente, raton, teclado, build}