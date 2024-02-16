const express= require('express');
const db =require('./config/db')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const employeeroute = require('./routes/employeeroute')
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());
app.use('/emp',employeeroute)
const PORT = 3076
db().then(()=>
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
}));