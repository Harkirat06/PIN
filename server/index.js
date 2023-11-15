require("./mongoose") // Base de datos
require('dotenv').config() // Utilizar variables del archivo .env
const express = require("express") // Servidor
const compression = require('compression') // Rendimiento
const cors = require('cors') // Control de acceso
const { pcBuilderRouter } = require('./controllers/pcBuilder') // Gestion de pc Builder
const imageRouter = require('./controllers/image') // Gestion de pc Builder
const { builderPorGamaRouter } = require("./controllers/buildPorGama")
const { builderPorPrecioRouter } = require("./controllers/buildPorPrecio")
const { autocompletarBuildRouter } = require("./controllers/autocompletarBuild")
const { builderPorNichoRouter } = require("./controllers/buildPorNicho")
const PORT = process.env.PORT || 5000

const server = express()
server.use(express.json())
server.use(compression())
server.use(cors())

server.use("/image", imageRouter)
server.use("/api/pcbuilder", pcBuilderRouter)
server.use("/api/builder/gama", builderPorGamaRouter)
server.use("/api/builder/precio", builderPorPrecioRouter)
server.use("/api/builder/autocomplete", autocompletarBuildRouter)
server.use("/api/builder/nicho", builderPorNichoRouter)


server.get("/api", (req, res) => {
  res.json({ message: "Proyecto inicial de PIN!" })
})

server.get('*', (req, res) => {
  res.json({ message: "Un saludo desde el servidor!" })
})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
