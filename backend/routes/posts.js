import express from 'express'
import { updatePost, deletePost, placeBid } from '../controllers/posts.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)

// place bid
router.patch('/:id/bid', auth, placeBid)

export default router
