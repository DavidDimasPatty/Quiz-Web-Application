const mongoose = require('mongoose');

const connect = async (e)=>{ 
await mongoose.connect('mongodb+srv://i18040:wearedead@cluster0.hw29l.mongodb.net/?retryWrites=true&w=majority',{
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

module.exports={
    connect:connect
}
