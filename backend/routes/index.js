const express=require("express");
const { updateQuiz } = require("../controllers/quiz.js");
const router=express.Router();
const quiz=require("../controllers/quiz.js")

router.get('/quiz',quiz.getAllQuiz);
router.get('/:id',quiz.getIdQuiz);
router.post('/create',quiz.createQuiz);
router.patch('/:id',quiz.updateQuiz);
router.delete('/:id',quiz.deleteQuiz);
    
module.exports=router;