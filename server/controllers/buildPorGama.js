const { buildsGamaBaja, buildsGamaMedia, buildsGamaAlta } = require("../datos/listas");
const { getRandomNumberExclusive } = require("./getRandomNumberExclusive");
const builderPorGamaRouter = require("express").Router()

const buildPorGama = (gama) => {
    switch (gama) {
        case "baja": return buildsGamaBaja[getRandomNumberExclusive(0, buildsGamaBaja.length)];
        case "media": return buildsGamaMedia[getRandomNumberExclusive(0, buildsGamaMedia.length)];
        case "alta": return buildsGamaAlta[getRandomNumberExclusive(0, buildsGamaAlta.length)];
        default: return {};
    }
};

builderPorGamaRouter.get("/", async (req, res) => {
    const gama = req.params.gama
    const conf = buildPorGama(gama)
    res.json(conf)
})

module.exports = {builderPorGamaRouter, buildPorGama};
