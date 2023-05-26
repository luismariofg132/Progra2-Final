const { Router } = require('express')
const router = Router()
const fs = require('fs')

const usersFile = fs.readFileSync('../Data/usuarios.json', 'utf-8')
let contacts = JSON.parse(usersFile)

router.get('/', (req, res) => {
    res.json(contacts)
})

router.post('/userByUserNameAndPassword', (req, res) => {
    const { username, password } = req.body
    const user = contacts.find(user => user.username === username && user.password === password)
    res.json(user)
})


module.exports = router 