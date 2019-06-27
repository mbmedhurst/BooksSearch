const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/googlebooks_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(3001))
    .catch(e => console.log(e))
