const express =  require ('express');
const app = express();
const morgan = require('morgan');

app.use(require('./routes'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get("/", (req,res) =>{
    return res.json({hello: "world"});
});

app.listen(3000);