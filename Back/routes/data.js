const { Router } = require('express')
const router = Router()
const fs = require('fs')

const dataFile = fs.readFileSync('../Data/data.json', 'utf-8')
let data = JSON.parse(dataFile)
const dataFilePlantilla = fs.readFileSync('../Data/dataPlantilla.json', 'utf-8')
let dataPlantilla = JSON.parse(dataFilePlantilla)

const partidosFile = fs.readFileSync('../Data/partidos.json', 'utf-8')
let partidos = JSON.parse(partidosFile)
const partidosPlantillaFile = fs.readFileSync('../Data/partidosPlantilla.json', 'utf-8')
let partidosPlantilla = JSON.parse(partidosPlantillaFile)

router.post('/reset', (req, res) => {
    data = dataPlantilla
    fs.writeFileSync('../Data/data.json', JSON.stringify(data))
    partidos = partidosPlantilla
    fs.writeFileSync('../Data/partidos.json', JSON.stringify(partidos))
    res.json({ message: 'Data reseted' })
})

module.exports = router