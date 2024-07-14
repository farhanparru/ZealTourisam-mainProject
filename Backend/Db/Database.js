const mongoose = require('mongoose')
require('dotenv').config()

const DB = process.env.DATABASE;   
     
mongoose.connect(DB,{  
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=>console.log('Databse connected')).catch((err)=>console.log("err",err))