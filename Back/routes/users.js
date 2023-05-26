const { Router } = require('express')
const router = Router()
const fs = require('fs')

const usersFile = fs.readFileSync('../Data/usuarios.json', 'utf-8')
let contacts = JSON.parse(usersFile)

router.get('/', (req, res) => {
    res.json(contacts)
})


module.exports = router 