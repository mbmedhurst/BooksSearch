const express = require('express')
const bodyParser = require('body-parser')
const { join, resolve } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extendecd: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(resolve(__dirname, 'client', 'build', 'index.html'))
    })
}



require('./routes')(app)

require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://mbmedhurst:marianna1018mongodb://<dbuser>:<dbpassword>@ds259347.mlab.com:59347/heroku_vf7z135k', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(process.env.PORT || 3001))
    .catch(e => console.log(e))
