const sequelize=require('sequelize');
require('dotenv').config();
const db=new sequelize(process.env.DATABASE,process.env.USER_DB,process.env.PASSWORD_DB, {
    host:process.env.HOST,
    dialect:"mysql",
    port:3306
});

module.exports=db;