const express = require("express")
const router = express.Router()
const {check, validationResult} = require('expresss-validator/check')

router.get("/", (req, res)=>{
    res.send("Users Route")
})

router.post("/", (req, res)=>{
    console.log(req.body)
    res.send("Users Route")
})

module.exports = router