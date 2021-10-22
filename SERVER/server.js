const express = require("express")
const app = express()
const connectDB = require("./config/db")

const PORT = process.env.PORT || 5000
connectDB()

app.use(express.json({extended:false}))
app.use("/api/users", require("./routes/userApi"))
app.use("/api/product", require("./routes/productApi"))

app.get('/', (req, res)=>{
    res.status(200).send('App Started')
})

app.listen(PORT, ()=>{console.log(`Server is listening at port ${PORT}`)})
