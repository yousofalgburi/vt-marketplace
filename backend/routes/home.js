import express from 'express'
import { getPosts, getPost, getPostsBySearch, getPostsByCategory } from '../controllers/home.js'
const router = express.Router()

router.get('/search', getPostsBySearch);
router.get('/', getPosts)
router.get('/:id', getPost)
//catoegory search by multiple tags
router.get('/tags/:tags', getPostsByCategory)


export default router
