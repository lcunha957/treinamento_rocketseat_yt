// para ler o dot.env.....
require('dotenv').config();

const express =  require ('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

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

// Para liberar o acesso a pasta de arquivos salvos pela aplicação
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.listen(3000);