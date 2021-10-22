const express = require("express")
const router = express.Router()
const { validationResult, check} = require('expresss-validator/check')

router.get("/", (req, res)=>{
    res.send("Users Route")
})

router.post("/", [
    check('name', 'Name is required').not().isEmpty(), 
    check('email', 'Please Enter a valid Email address').isEmail(),
    check('password', 'Please your password should have 5 characters').isLength({min:5})
    ],
    (req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        res.status(200).send('Users Route')

})

module.exports = router