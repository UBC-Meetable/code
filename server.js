const express = require('express')

const app = express()
app.get('/xyz', (req, res)=>{
    res.send("Hi")
})

app.listen(3000, ()=> console.log("Meetable api listening on port 3000"));