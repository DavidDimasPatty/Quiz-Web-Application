const express= require("express");
const cors = require('cors');
const db=require("./dbconfig.js");
const ruter=require("./routes/index.js");

const PORT = process.env.PORT || 5000
const app=express();
require('dotenv').config();

const dbconnect=async()=>{
try {
    await db.authenticate();
    console.log('Database connected');
} catch (error) {
  console.error('Connection error:',error);  
}
}
dbconnect();
app.use(express.json());
app.use(cors());
app.use('/',ruter);
app.set('trust proxy', 1)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));