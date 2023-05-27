const { Router } = require('express')
const router = Router()
const fs = require('fs')

const dataFile = fs.readFileSync('../Data/data.json', 'utf-8')
let data = JSON.parse(dataFile)

router.get('/', (req, res) => {
    res.json(data)
})

module.exports = router