const {Schema, model} = require("mongoose")
const cpuListSchema = new Schema({
    marca: String,
    nombre: String,
    gama: Number,
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
    imagen: String
})

const placasListSchema = new Schema({
    marca: String,
    nombre: String,
    tamaño: String,
    socket: String,
    tipoRam: String,
    gama: Number,
    numeroM2: Number,
    numeroSata: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    imagen: String
})

const gpuListSchema = new Schema({
    marca: String,
    nombre: String,
    consumo: Number,
    potenciaRecomendada: Number,
    gama: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    imagen: String
})

const ramListSchema = new Schema({
    marca: String,
    nombre: String,
    tipo: String,
    capacidad: Number,
    gama: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    imagen: String
})

const discoListSchema = new Schema({
    marca: String,
    nombre: String,
    capacidad: Number,
    tecnologia: String,
    gama: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    imagen: String
})

const monitorListSchema = new Schema({
    marca: String,
    nombre: String,
    gama: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    imagen: String,
})

const disipadorListSchema = new Schema({
    marca: String,
    nombre: String,
    tipo: String,
    gama: Number,
    precio: {
      segundaMano: Number,
      amazon: Number,
      ebay: Number,
    },
    imagen: String,
})

cpuListSchema.set("toJSON",{
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
   }
})

 const cpuList = model("cpuList", cpuListSchema)
 
 module.exports = cpuList