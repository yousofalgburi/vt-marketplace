import express from 'express'
import { getPosts, getPost, getPostsBySearch } from '../controllers/home.js'
const router = express.Router()

router.get('/search', getPostsBySearch);
router.get('/', getPosts)
router.get('/:id', getPost)

export default router
