import express from 'express'
import Post from '../models/post.js'
const router = express.Router()

export const createPost = async (req, res) => {

	const post = req.body
	console.log(post)
	if(!post.description){
		return res.status(400).json({ message: 'Description is required' })
	} else if(!post.title){
		return res.status(400).json({ message: 'Title is required' })
	} else if(!post.image){
		return res.status(400).json({ message: 'Image URL is required' })
	} else if (!post.type){
		return res.status(400).json({ message: 'Type is required (Auction, Price)' })
	} else if (post.type === 'Auction' && !post.bid){
		return res.status(400).json({ message: 'Bid is required' })
	} else if (post.type === 'Price' && !post.price){
		return res.status(400).json({ message: 'Price is required' })
	} else if (post.price && post.bid){
		return res.status(400).json({ message: 'Price and Bid cannot be used together' })
	} else if (post.type === 'Auction' && post.bid < 0){
		return res.status(400).json({ message: 'Bid must be greater than 0' })
	} else if (post.type === 'Price' && post.price < 0){ 
		return res.status(400).json({ message: 'Price must be greater than 0' })
	}

	const newPost = new Post({
		...post,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	})

	try {
		await newPost.save()

		res.status(201).json(newPost)
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}

export default router
