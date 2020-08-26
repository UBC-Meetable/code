const express = require('express');
const Quiz = require('../models/Quiz');
const { generateResponse } = require('./responses');
const router = express.router()

router.get('/', async (req,res)=>{
    
    const quizes = await Quiz.find()
    res.status(200).send({
        success: true,
        quizes
    })

})

router.post('/', async (req,res)=>{
    const body = req.body
    const uid = body.uid

    
    const q = new Quiz({
        uid
    })
    
    try {
        const quiz = await q.save()
        const r = generateResponse(uid,quiz._id)
        res.status(200).send({
            success: true,
            quiz
        })
        
    } catch (error) {
        res.send({
            success: false,
            error: JSON.stringify(error)
        })
    }


})



module.exports = router;