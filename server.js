const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

require('./routes')(app)

require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://mbmedhurst:marianna1018@ds247377.mlab.com:47377/heroku_2j7zqbv9', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(process.env.PORT || 3001))
    .catch(e => console.log(e))
