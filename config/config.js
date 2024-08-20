require('dotenv').config();
module.exports={
    PORT:process.env.PORT ||3000,
    MONGO_URL:process.env.MONGO_URL,
    JWT_SECRET:process.env.JWT_SECRET,
    EMAIL_SERVICE:process.env.EMAIL_SERVICE,
    EMAIL_USER:process.env.EMAIL_USER,
    EMAIL_PASS:process.env.EMAIL_PASS,
};