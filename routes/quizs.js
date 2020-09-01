const express = require('express');
const QuizInstance = require('../models/QuizInstance');
const { generateResponse } = require('./responses');
const Quiz = require('../models/Quiz');
const router = express.Router()


// get all quiz instances
router.get('/', async (req,res)=>{
    const quizes = await QuizInstance.find()
    res.status(200).send({
        success: true,
        quizes
    })

})

// get quiz instance for user
router.get('/', async (req,res)=>{
    const quiz = await QuizInstance.find({uid: req.body.uid})
    res.status(200).send({
        success: true,
        quiz
    })

})

// I'm assuming this is to create a new quiz instance before serving it to client
// if client doesn't need to maintain its own quiz instance, send quiz instance id instead
router.post('/', async (req,res)=>{
    const body = req.body
    const uid = body.uid
    // const quiz = await Quiz.find({name: "hardcoded"}) not needed for MVP

    const q = new QuizInstance({
        uid: uid,
        //quiz: quiz
    })
    
    try {
        const quiz = await q.save()
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

// assuming client sends back finished quiz instance
// unsure if user should be added to a group here or in groups.js
router.post('/submitcomplete', async (req,res)=>{
    const body = req.body
    const quizInstance = body.quizInstance
    const uid = body.uid



})

module.exports = router;