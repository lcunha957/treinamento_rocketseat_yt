const express =  require ('express');
const multer = require('multer');
const app = express();

app.get("/", (req,res) =>{
    return res.json({hello: "world"});
});

app.get("/posts", (req,res) =>{
    console.log(req.file);
    return res.json({hello: "world"});
});
app.listen(3000);