const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
var stringcon='mongodb+srv://i18040:wearedead@cluster0.hw29l.mongodb.net/?retryWrites=true&w=majority'
const conn = mongoose.createConnection(stringcon);
const connect = async (e)=>{ 
await mongoose.connect(stringcon,{
    useNewUrlParser: true, 
    useUnifiedTopology: true

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

async function getQuiz(){
    var arr=[]
     await quiz.find().then((res)=>{
        arr=res;
    }).catch((e)=>{
        console.log(e)
    })
    return arr
}

function addQuiz(item){
    console.log(item.body)
    const newData = {
        soal: item.body.question,
        option1: item.body.option1,
        option2: item.body.option2,
        option3: item.body.option3, 
        option4: item.body.option4,
        jawaban :item.body.option1
    }
    var data= new quiz(newData);
    data.save();
}

function deleteQuiz(item){
 quiz.findByIdAndRemove(item).exec();
}

async function getOneQuiz(item){
    var arr=[]
    await quiz.findById(item).then((res)=>{
       arr=res;
       console.log(arr)
   }).catch((e)=>{
       console.log(e)
   })
   return arr
}

async function updateQuiz(item){
    console.log(item)
    await quiz.updateOne(
        { _id: item.id },
        { $set: { soal: item.question ,option1: item.option1,option2: item.option2,option3: item.option3,option4: item.option4 } },
        { upsert: true } // Make this update into an upsert
      );
}


module.exports={
    connect:connect,
    getQuiz:getQuiz,
    addQuiz:addQuiz,
    deleteQuiz:deleteQuiz,
    getOneQuiz:getOneQuiz,
    updateQuiz:updateQuiz
}
