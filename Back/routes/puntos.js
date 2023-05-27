const { Router } = require('express')
const router = Router()
const fs = require('fs')

const puntosFile = fs.readFileSync('../Data/tablaPuntos.json', 'utf-8')
let puntos = JSON.parse(puntosFile)

router.get('/', (req, res) => {
    res.json(puntos)
})

router.post('/editPuntos', (req, res) => {
    const { uid, eq, pv, g, e, p, gf, gc, pos, gr } = req.body
    const index = puntos.findIndex(punto => punto.uid === uid)
    puntos[index].eq = eq
    puntos[index].pv = pv
    puntos[index].g = g
    puntos[index].e = e
    puntos[index].p = p
    puntos[index].gf = gf
    puntos[index].gc = gc
    puntos[index].pos = pos
    puntos[index].gr = gr
    res.json(puntos)

    fs.writeFileSync('../Data/tablaPuntos.json', JSON.stringify(puntos), 'utf-8')
})

module.exports = router