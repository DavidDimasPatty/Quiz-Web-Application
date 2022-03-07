const quiz = require("../model/quizModel.js");

const getAllQuiz= async (req,res)=>{
    try {
    const quizes= await quiz.findAll();
    res.json(quizes);   
    } catch (error) {
        console.log(error);    
    }
}

const getIdQuiz= async (req,res)=>{
    try {
    const quizes= await quiz.findAll({
        where:{
            id:req.params.id
        }
    });
    res.json(quizes[0]);   
    } catch (error) {
        console.log(error);    
    }
}

const createQuiz= async (req,res)=>{
    try {
    await quiz.create(req.body);
    res.json({
        "message":"Quiz Created"
    })
       
    } catch (error) {
        console.log(error);    
    }
}

const updateQuiz= async (req,res)=>{
    try {
    await quiz.update(req.body,{
        where:{
            id:req.params.id
        }

    });
    res.json({
        "message":"Quiz Updated"
    })
       
    } catch (error) {
        console.log(error);    
    }
}

const deleteQuiz= async (req,res)=>{
    try {
    await quiz.destroy({
        where:{
            id:req.params.id
        }

    });
    res.json({
        "message":"Quiz Deleted"
    })
       
    } catch (error) {
        console.log(error);    
    }
}

module.exports={
    getAllQuiz:getAllQuiz,
    createQuiz:createQuiz,
    getIdQuiz:getIdQuiz,
    updateQuiz:updateQuiz,
    deleteQuiz:deleteQuiz
};