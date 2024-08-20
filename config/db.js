const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database successfully....")
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
module.exports=connectDB;