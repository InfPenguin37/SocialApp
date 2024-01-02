const express = require('express')
const {
    createUser,
    updateUser,
    getUser,
    getUsers
} = require('../controllers/userController')

const router = express.Router()

//CREATE a new user
router.post('/', createUser)

//GET a single user
router.get('/:userid', getUser)

//GET all users
router.get('/', getUsers)

//UPDATE a single user profile
router.patch('/:userid', updateUser)

module.exports = router