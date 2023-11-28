import express from 'express'
import { signin, signup, getCurrentUser } from '../controllers/user.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/currentUser', auth, getCurrentUser)

router.post('/signin', signin)
router.post('/signup', signup)
router.delete('/delete', auth, deleteCurrentUser)
router.delete('/delete/:id', auth, deleteUser)

export default router
