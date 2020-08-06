require('dotenv').config()
const express = require("express")
const massive = require("massive")
const ctrl = require('./controllers/racerController')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Connected to our Database')
})

app.post('/api/racers', ctrl.addRacer)
app.get('/api/racers', ctrl.getRacers)

app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))

