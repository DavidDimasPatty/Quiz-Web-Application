const express = require('express')
const cors = require('cors')
const dbm=require('./db')
const db = require('./db')
dbm.connect()
dbm.getQuiz()
const PORT = process.env.PORT || 5000
require('dotenv').config()
const app = express()

//Rate Limiting
app.set('trust proxy', 1)
// Set static folder
app.use(express.static('public'))
//routes

// Enable cors
app.use(cors())


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))