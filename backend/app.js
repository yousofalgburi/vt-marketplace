import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import homeRoutes from './routes/home.js'
import userRoutes from './routes/user.js'
import createRoutes from './routes/create.js'
import postRoutes from './routes/posts.js'

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use('/home', homeRoutes)
app.use('/user', userRoutes)
app.use('/create', createRoutes)
app.use('/posts', postRoutes)

mongoose
	.connect('mongodb+srv://yousof:gmhod333@development.bbfev3h.mongodb.net/?retryWrites=true&w=majority')
	.then(() => app.listen(port, () => console.log(`Server Running on Port: ${port}`)))
	.catch((error) => console.log(`${error} could not connect`))
