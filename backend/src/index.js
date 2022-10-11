const express =  require ('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(require('./routes'));

// Database setup
mongoose.connect('mongodb://localhost:27017/upload',{
useNewUrlParser: true,

});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get("/", (req,res) =>{
    return res.json({hello: "world"});
});

app.listen(3000);