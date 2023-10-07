require("./mongoose")
require('dotenv').config()
const express = require("express")
const path = require('path')
const compression = require('compression')
const cors = require('cors')
const pcBuilderRouter = require('./controllers/pcbuilder')
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
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
