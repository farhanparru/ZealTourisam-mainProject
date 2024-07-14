require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('../Backend/Db/Database')
const PORT = 4000


app.use(cors())


// Middleware function
app.use((req, res, next) => {
    res.send('hello');
});

// Example route handler
app.get('/', (req, res) => {
    res.send('This is the home page');
});






app.listen(PORT,()=>{
    console.log(`server start at port on ${PORT}`);  
})