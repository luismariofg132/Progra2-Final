const { Router } = require('express')
const router = Router()
const fs = require('fs')

const dataFile = fs.readFileSync('../Data/data.json', 'utf-8')
let data = JSON.parse(dataFile)

router.get('/', (req, res) => {
    res.json(data)
})

router.post('/addJugador', (req, res) => {
    const { idEquipo, nombre } = req.body
    if (idEquipo && nombre) {
        const uuid = crypto.randomUUID();
        const newJugador = { uid: uuid, nombre: nombre }
        data.forEach(equipo => {
            if (equipo.uid.toString() === idEquipo) {
                equipo.Jugadores.push(newJugador)
            }
        }
        )
        fs.writeFileSync('../Data/data.json', JSON.stringify(data))
        res.json(data)
    } else {
        res.status(500).json({ error: 'There was an error.' })
    }
})

router.post('/editJugador', (req, res) => {
    const { idEquipo, idJugador, nombre, cantAmarillas, cantRojas } = req.body
    if (idEquipo && idJugador && nombre && cantAmarillas && cantRojas) {
        data.forEach(equipo => {
            if (equipo.uid === idEquipo) {
                equipo.Jugadores.forEach(jugador => {
                    if (jugador.uid === idJugador) {
                        jugador.nombre = nombre
                        jugador.cantAmarillas = jugador.cantAmarillas ? jugador.cantAmarillas + cantAmarillas : cantAmarillas
                        jugador.cantRojas = jugador.cantRojas ? jugador.cantRojas + cantRojas : cantRojas
                    }
                })
            }
        })
        fs.writeFileSync('../Data/data.json', JSON.stringify(data))
        res.json(data)
    } else {
        res.status(500).json({ error: 'There was an error.' })
    }
})

router.delete('/deleteJugador', (req, res) => {
    const { idEquipo, nombreJugador } = req.body
    if (idEquipo && nombreJugador) {
        data.forEach(equipo => {
            if (equipo.uid === idEquipo) {
                equipo.Jugadores = equipo.Jugadores.filter(jugador => jugador.nombre !== nombreJugador)
            }
        })
        fs.writeFileSync('../Data/data.json', JSON.stringify(data))
        res.json(data)
    } else {
        res.status(500).json({ error: 'There was an error.' })
    }
})


module.exports = router