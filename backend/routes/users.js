const express = require('express')
const {
    createUser,
    updateUser,
    getUser
} = require('../controllers/userController')

const router = express.Router()

//CREATE a new user
router.post('/', createUser)

//GET a single user
router.get('/:userid', getUser)

//UPDATE a single user profile
router.patch('/:userid', updateUser)

module.exports = router