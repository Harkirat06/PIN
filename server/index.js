require("./mongoose")
require('dotenv').config()
const express = require("express")
const path = require('path')
const compression = require('compression')

const PORT = process.env.PORT || 5000

const app = express()
app.use(compression())

app.use(express.static(path.resolve(__dirname, '../client/build')))


app.get("/api", (req, res) => {
  res.json({ message: "Proyecto inicial de PIN!" })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
