const sequelize=require('sequelize');
const db=require("../dbconfig.js")

const {DataTypes}=sequelize;

const quiz=db.define('quiz',{
    id_question:{
        type:DataTypes.INTEGER
    }
    ,
    question:{
        type:DataTypes.STRING
    },
    option1:{
        type:DataTypes.STRING
    },
    option2:{
        type:DataTypes.STRING
    },
    option3:{
        type:DataTypes.STRING
    },
    option4:{
        type:DataTypes.STRING
    }

},{
    freezeTableName:true
});

module.exports=quiz;