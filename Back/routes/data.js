const { Router } = require('express')
const router = Router()
const fs = require('fs')

const dataFile = fs.readFileSync('../Data/data.json', 'utf-8')
let data = JSON.parse(dataFile)
const dataFilePlantilla = fs.readFileSync('../Data/dataPlantilla.json', 'utf-8')
let dataPlantilla = JSON.parse(dataFilePlantilla)

router.post('/reset', (req, res) => {
    data = dataPlantilla
    fs.writeFileSync('../Data/data.json', JSON.stringify(data))
    res.json(data)
})

module.exports = router