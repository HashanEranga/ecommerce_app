const express = require('express')
const app = express()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

connectDB()

app.use('/api/users', require('./routes/userApi'))
app.use('/api/products', require('./routes/productApi'))

app.get('/', (req,res)=>{
    res.send('App started')
})

app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
})