const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:"./upload",
    filename:(req,file,cb)=>{
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type'), false);
    }
  };
  
  module.exports = multer({ storage, fileFilter });