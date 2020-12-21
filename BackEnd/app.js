const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const myRoutes = require('./routes/usersRoutes');


//parse into a json object any thing from client (req.body ==> parse into json)
app.use(cors());
app.use(bodyParser.json())

app.use('/bank', myRoutes);




const port = 8080


mongoose.connect('mongodb://localhost:27017/Credit-Suisse',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log(" mongoose DB  Connected");
   app.listen(port,()=>{
       console.log(`server conected on port ${port}`)
   })
}).catch((error)=>{
console.log("Error is", error.message);
})





