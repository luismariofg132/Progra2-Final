const { Router } = require('express')
const router = Router()
const fs = require('fs')

const partidosFile = fs.readFileSync('../Data/partidos.json', 'utf-8')
let partidos = JSON.parse(partidosFile)

router.get('/', (req, res) => {
    res.json(partidos)
})

router.put('/editPartidoFGrupos', (req, res) => {
    const { uipartido, goles1, goles2, jugadorGoles1, jugadorGoles2, equipo1, equipo2 } = req.body
    partidos.forEach(partido => {
        if (partido.partido === uipartido) {
            partido.goles1 = goles1
            partido.goles2 = goles2
            partido.jugadorGoles1 = jugadorGoles1
            partido.jugadorGoles2 = jugadorGoles2
            partido.equipo1 = equipo1
            partido.equipo2 = equipo2
        }
    })
    fs.writeFileSync('../Data/partidos.json', JSON.stringify(partidos))
    res.json(partidos)
})

module.exports = router