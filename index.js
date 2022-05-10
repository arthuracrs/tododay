const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/tododay', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => {
    console.log('running on 3000')
})