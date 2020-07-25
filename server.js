const express = require('express')

const app = express()

app.get('/xyz', (req, res)=>{
    res.send("Hi")
})


//req : request
//res : response
app.post('/submitForm', (req,res)=> {
    
    const body = req.body
    // {
    //     "name": "brendan",
    //     "email": "wubrendan7@gmail.com",
    //     "password": "asdfdsafsdfsa"
    // }
    

    res.json({
        status: "success",
        code: 200,
        msg: "lit"
    })

})

app.listen(3000, ()=> console.log("Meetable api listening on port 3000"));