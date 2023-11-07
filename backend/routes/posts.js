import express from 'express'
import { updatePost, deletePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)

export default router
