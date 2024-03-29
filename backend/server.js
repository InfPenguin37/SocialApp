require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}...`)
        })
    })
    .catch((error) => {
        console.log(error)
    })