const express = require('express')

const router = express.Router()

//GET a single user
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a specific user' })
})

//UPDATE a single user profile
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a specific user profile' })
})

module.exports = router