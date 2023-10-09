require("./mongoose") // Base de datos
require('dotenv').config() // Utilizar variables del archivo .env
const express = require("express") // Servidor
const compression = require('compression') // Rendimiento
const cors = require('cors') // Control de acceso
const pcBuilderRouter = require('./controllers/pcbuilder') // Gestion de pc Builder
const PORT = process.env.PORT || 5000

const server = express()
server.use(express.json())
server.use(compression())
server.use(cors())

server.use("/api/pcbuilder", pcBuilderRouter)

server.get("/api", (req, res) => {
  res.json({ message: "Proyecto inicial de PIN!" })
})

server.get('*', (req, res) => {
  res.json({ message: "Un saludo desde el servidor!" })
})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
