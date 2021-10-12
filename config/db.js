const mongoose = require("mongoose")
const config = require("./keys")
const db = config.mongoURI

const connectDB = async()=>{
    try{
        await mongoose.connect(db, {
            
        })
        console.log("Connected.")
    }catch(err){
        console.log("Connection Failed.")
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB