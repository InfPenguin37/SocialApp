const User = require('../models/userModel')
const mongoose = require('mongoose')

//CREATE a new user
const createUser = async(req, res) => {
        const { name, age } = req.body
        try {
            const user = await User.create({ name, age })
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    //GET all users
const getUsers = async(req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}

//GET a single user
const getUser = async(req, res) => {
    const { userid } = req.params

    if (!mongoose.Types.ObjectId.isValid(userid)) {
        return res.status(404).json({ error: 'No such user found.' })
    }
    const user = await User.findById({ _id: userid })
    res.status(200).json(user)

    if (!user) {
        return res.status(404).json({ error: 'User not found.' })
    }
}

//UPDATE a single user profile
const updateUser = async(req, res) => {
    const { userid } = req.params

    if (!mongoose.Types.ObjectId.isValid(userid)) {
        return res.status(404).json({ error: 'No such user found' })
    }

    const user = await User.findOneAndUpdate({ _id: userid }, {
        ...req.body
    })
    res.status(200).json(user)

    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }
}


module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser
}