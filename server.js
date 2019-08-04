const express = require('express')
const bodyParser = require('body-parser')
const { join, resolve } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extendecd: true }))
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)
app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

require('mongoose').connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
  .then(_ => app.listen(process.env.PORT || 3001))
  .catch(e => console.log(e))
