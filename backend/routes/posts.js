const express = require('express')
const Post = require('../models/postModel')

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
router.post('/', async(req, res) => {
    const { title, body } = req.body

    try {
        const post = await Post.create({ title, body })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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