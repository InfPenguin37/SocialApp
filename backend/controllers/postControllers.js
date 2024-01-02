const Post = require('../models/postModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

//GET all posts
const getPosts = async(req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })

    res.status(200).json(posts)
}

//GET a specific post
const getPost = async(req, res) => {
    const { postid } = req.params

    if (!mongoose.Types.ObjectId.isValid(postid)) {
        return res.status(404).json({ error: 'No such post' })
    }
    const post = await Post.findById(postid)
    res.status(200).json(post)

    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }
}

//CREATE a new post
const createPost = async(req, res) => {
    const { title, body, userid } = req.body
    const userExists = await User.exists({ _id: userid });

    if (!userExists) {
        return res.status(404).json({ error: 'Invalid user making post' })
    }
    try {
        const post = await Post.create({ title, body, userid })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//UPDATE a specific post
const updatePost = async(req, res) => {
    const { postid } = req.params

    if (!mongoose.Types.ObjectId.isValid(postid)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findOneAndUpdate({ _id: postid }, {
        ...req.body
    })

    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }
    res.status(200).json(post)
}

//DELETE a specific post
const deletePost = async(req, res) => {
    const { postid } = req.params

    if (!mongoose.Types.ObjectId.isValid(postid)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findOneAndDelete({ _id: postid })

    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }

    res.status(200).json(post)
}

module.exports = {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost
}