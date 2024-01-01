require('dotenv').config()

const express = require('express')
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

//listening for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}...`)
})