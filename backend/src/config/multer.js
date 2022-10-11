const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
 dest: path.resolve(__dirname, '..', '..','tmp', 'uploads'),
 storage: multer.diskStorage({
   destination: (req,file,cb) => {
    cb (null, path.resolve(__dirname, '..', '..','tmp', 'uploads'));
   }, 
   filename: (req,file,cb) => {
    crypto.randomBytes(16,(err,hash) =>{
        if (err) cb(err);

        const fileName = `${hash.toString('hex')} - ${file.originalname}`; 
        
        cb(null, fileName);
    });
   },
 }),
 limits: {
   fileSize: 2 * 1024 * 1024 , //pra aceitar 2 MB  
 },
 fileFilter:(req,file, cb) => {
 const allowedMymes = ['image/jpeg', 'images/jpg', 'images/pjpeg', 'images/png', 'images/gif'];
 if (allowedMymes.includes(file.mimetype)){
  cb(null, true); 
 } else {
   cb(new Error('Invalid file type')); 
 }
 },
};