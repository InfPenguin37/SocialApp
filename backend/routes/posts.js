const express = require('express')

const router = express.Router()

//GET all posts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all posts' })
})

//GET a specific post
router.get('/:postid', (req, res) => {
    res.json({ mssg: 'GET a specific post' })
})

//CREATE a new post
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new post' })
})

//UPDATE a specific post
router.patch('/:postid', (req, res) => {
    res.json({ mssg: 'UPDATE a specific post' })
})

//DELETE a specific post
router.delete('/:postid', (req, res) => {
    res.json({ mssg: 'DELETE a specific post' })
})

module.exports = router