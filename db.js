const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
var stringcon='mongodb+srv://i18040:wearedead@cluster0.hw29l.mongodb.net/?retryWrites=true&w=majority/QuizDB'
const conn = mongoose.createConnection(stringcon);
const connect = async (e)=>{ 
await mongoose.connect(stringcon,{
    // useNewUrlParse : true,
    // useUnifiedTopology:true,
    // useFindAndModify:false,
    // useCreateIndex:true

 }).then(()=>{
     console.log("Database Connect")
 }).catch(err=>{
     console.log("Database Failed to Connect "+err)
 })
}

const quizscheme = new Schema({
     soal: String,
     option1: String,
     option2: String,
     option3: String, 
     option4: String,
     jawaban :String
    },{collection:'quiz'});

var quiz=mongoose.model('quiz',quizscheme)

const getQuiz = async (e)=>{
    console.log(quiz.find())
}

module.exports={
    connect:connect,
    getQuiz:getQuiz
}
