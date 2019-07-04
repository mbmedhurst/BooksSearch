const express = require('express')
const { join } = require('path')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

require('./routes')(app)

  // when deployed to heroku
//   var MONGODB_URI = process.env.MONGODB_URI || "mongodb://loclahost/news_db"
//   mongoose.connect(MONGODB_URI)

require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(PORT))
    .catch(e => console.log(e))
