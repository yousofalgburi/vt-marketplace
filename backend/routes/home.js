import express from 'express'
import { getPosts, getPost, getPostsBySearch } from '../controllers/home.js'
const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/search', getPostsBySearch)

export default router
