const { buildsParaGamers, buildsParaProfesionales, buildsParaEstudiantes, buildsParaUsoBasico } = require("../datos/listas");
const { getRandomNumberExclusive } = require("./getRandomNumberExclusive");
const builderPorNichoRouter = require("express").Router()

const buildPorNicho = (nicho) => {
    switch (nicho) {
        case "Gamers": return buildsParaGamers[getRandomNumberExclusive(0, buildsParaGamers.length)];
        case "Profesionales": return buildsParaProfesionales[getRandomNumberExclusive(0, buildsParaProfesionales.length)];
        case "Estudiantes": return buildsParaEstudiantes[getRandomNumberExclusive(0, buildsParaEstudiantes.length)];
        case "Uso Basico": return buildsParaUsoBasico[getRandomNumberExclusive(0, buildsParaUsoBasico.length)];
        default: return {};
    }
};

builderPorNichoRouter.get("/", async (req, res) => {
    const nicho = req.query.nicho
    const conf = buildPorNicho(nicho)
    res.json(conf)
})

module.exports = {builderPorNichoRouter, buildPorNicho};