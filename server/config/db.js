const mongoose = require('mongoose')
const config = require('./keys')

const db = config.mongoURI

const connectDB = async()=>{
    try{
        await mongoose.connect(db, {

        })
        console.log('Connection Established')
    }
    catch(err){
        console.log('Connection not established')
        process.exit(1)
    }
}

module.exports = connectDB