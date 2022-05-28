const express = require('express')
const cors = require('cors')
const dbm=require('./db')
const db = require('./db')
var CircularJSON = require('circular-json');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000
require('dotenv').config()
const app = express()




app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



dbm.connect()

//router
app.get('/get',function(req,res){
console.log("panggil");
dbm.getQuiz().then((result)=>{
    res.send(result)
})
})

app.post('/add',function(req,res){
  dbm.addQuiz(req)
})

app.delete('/delete',function(req,res){
     console.log(req.body.id)
    dbm.deleteQuiz(req.body.id)
  })
 
app.patch('/update',function(req,res){
    console.log(req.body.data)
   dbm.updateQuiz(req.body.data)
 })

app.get('/getid',function(req,res){
    console.log("panggil");
    console.log(req.query)
    dbm.getOneQuiz(req.query.id).then((result)=>{
        res.send(result)
    })
    })

//Rate Limiting
app.set('trust proxy', 1)
// Set static folder
app.use(express.static('public'))
//routes

// Enable cors



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))