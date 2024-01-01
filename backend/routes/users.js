const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

//CREATE a new user
router.post('/', async(req, res) => {
    const { name, age } = req.body
    try {
        const user = await User.create({ name, age })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//GET a single user
router.get('/:userid', (req, res) => {
    res.json({ mssg: 'GET a specific user' })
})

//UPDATE a single user profile
router.patch('/:userid', (req, res) => {
    res.json({ mssg: 'UPDATE a specific user profile' })
})

module.exports = router