const express = require('express')
const cors = require('cors')
const dbm=require('./db')
const db = require('./db')
var CircularJSON = require('circular-json');

const PORT = process.env.PORT || 5000
require('dotenv').config()
const app = express()
app.use(cors())


dbm.connect()
app.get('/get',function(req,res){
console.log("panggil");
const arr=dbm.getQuiz()
res.send(CircularJSON.stringify(arr))
})

app.post('/add',function(req,res){
  dbm.addQuiz(req)
})

//Rate Limiting
app.set('trust proxy', 1)
// Set static folder
app.use(express.static('public'))
//routes

// Enable cors



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))