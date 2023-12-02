import express from 'express'
import { signin, signup, getCurrentUser, deleteCurrentUser, deleteUser } from '../controllers/user.js'
import auth from '../middleware/auth.js'
import { getPostsByUser } from '../controllers/home.js'

const router = express.Router()

router.get('/currentUser', auth, getCurrentUser)

router.post('/signin', signin)
router.post('/signup', signup)
router.delete('/delete', auth, deleteCurrentUser)
router.delete('/delete/:userID', auth, deleteUser)

router.get('/posts/:userID', auth, getPostsByUser)

export default router
