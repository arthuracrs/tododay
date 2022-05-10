const express = require('express')
const cors = require('cors')
const path = require('path');
const database = require('./db');

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
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

    const dayId = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date())

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
    app.listen(3000, () => {
        console.clear()
        console.log('running on 3000')
    })
})
