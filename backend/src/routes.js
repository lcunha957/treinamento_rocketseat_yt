const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get("/", (req,res) =>{
    return res.json({ hello: "world"});
});

routes.post("/posts", multer(multerConfig).single('file'), (req,res) =>{
    console.log(req.file);
    return res.json({hello: "world"});
});


module.exports = routes;

