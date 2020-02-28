const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/user/:id', (req, res) => )

app.get('/simulate-error', (req, res) => res.status(500).send('Oh no it is broken'))

module.exports = app

