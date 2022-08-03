const express = require('express')
const cors = require('cors')
const dbm=require('./db')
const path = require('path')
var CircularJSON = require('circular-json');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('dotenv').config()

dbm.connect()

//router
app.get('/get',function(req,res){
console.log("panggil");
dbm.getQuiz().then((result)=>{
    res.send(result)
})
})

app.get('/getallcategory',function(req,res){
  console.log("panggil");
  dbm.getAllCategory().then((result)=>{
      res.send(result)
  })
  })

app.get('/getiduser',function(req,res){
    console.log("panggil");
    dbm.getIdUser().then((result)=>{
        res.send(result)
    })
    }) 
  
app.post('/add',function(req,res){
  dbm.addQuiz(req)
})

app.post('/addscore',function(req,res){
  dbm.addScore(req)
})

app.delete('/delete',function(req,res){
     console.log(req.body.id)
    dbm.deleteQuiz(req.body.id)
  })
 
app.patch('/update',function(req,res){
    console.log(req.body.data)
   dbm.updateQuiz(req.body.data)
 })

 app.patch('/updatescore',function(req,res){
  console.log(req.body.data)
 dbm.updateScore(req.body.data)
})

app.get('/getid',function(req,res){
    console.log("panggil");
    console.log(req.query)
    dbm.getOneQuiz(req.query.id).then((result)=>{
        res.send(result)
    })
    })

    
app.get('/getquizc',function(req,res){
     
      dbm.getOneQuizCategory(req.query).then((result)=>{
         console.log(result)
          res.send(result)
      })
})

app.get('/getscoreuser',function(req,res){
     
  dbm.getScoreUser(req.query).then((result)=>{
     console.log(result)
      res.send(result)
  })
})

app.get('/getscore',function(req,res){
      console.log("panggil");
      dbm.getScore().then((result)=>{
          res.send(result)
      })
})

app.get('/getcategory',function(req,res){
  console.log("panggil");
  dbm.getCategory().then((result)=>{
      res.send(result)
  })
})

//Rate Limiting
app.set('trust proxy', 1)
// Set static folder
app.use(express.static('public'))
//routes

// Enable cors
if(process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));

  });
}


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))