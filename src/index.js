require('dotenv').config()
const express = require('express')
const cors = require('cors')
const database = require('./db');

const PORT = process.env.PORT || 5000
const appUrl = process.env.APP_URL || `http://localhost:${PORT}`

const app = express()
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs', { appUrl});
});

app.get('/day', async (req, res) => {
    const { id } = req.query

    const Day = require('./models/day.schema');
    await Day.sync()

    try {
        const result = await Day.findByPk(id, { raw: true })

        res.json(result)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

app.post('/day', async (req, res) => {
    const { english, codeChallenge, roadmap } = req.body

    const Day = require('./models/day.schema');
    await Day.sync()

    const dayId = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Recife' }).format(new Date())

    try {
        const newDay = await Day.upsert({
            english,
            codeChallenge,
            roadmap,
            date: new Date(new Date() - (3 * 60 * 60 * 1000)),
            id: dayId
        })

        res.json(newDay)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

database.sync().then(async () => {
    app.listen(PORT, () => {
        console.clear()
        console.log('running on ' + PORT)
    })
})
