const express = require('express')
const {
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost
} = require('../controllers/postControllers')

const router = express.Router()

//GET all posts
router.get('/', getPosts)

//GET a specific post
router.get('/:postid', getPost)

//CREATE a new post
router.post('/', createPost)

//UPDATE a specific post
router.patch('/:postid', updatePost)

//DELETE a specific post
router.delete('/:postid', deletePost)

module.exports = router