import express from 'express'
import mongoose from 'mongoose'
import Post from '../models/post.js'
const router = express.Router()

export const updatePost = async (req, res) => {
	const { id } = req.params
	const { title, description, image, location, price, tag, bid } = req.body

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

	//check if post was created by current user: req.userId
	const post = await Post.findById(id)
	if(!post) return res.status(404).json({ message: 'Post not found' })
	if(post.creator !== req.userId) return res.status(401).json({ message: 'Unauthorized' })

	const updatedPost = { title, description, image, location, price, bid, tag, _id: id }
	
	//if a post has been bid on, you cannot update the bid
	if(post.type === 'Auction' && post.bidCount > 0) {
		updatePost.bid = undefined
	}

	await Post.findByIdAndUpdate(id, updatedPost, { new: true })

	res.json(updatedPost)
}

export const deletePost = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

	//check if post was created by current user: req.userId
	const post = await Post.findById(id)
	if(!post) return res.status(404).json({ message: 'Post not found' })
	if(post.creator !== req.userId) return res.status(401).json({ message: 'Unauthorized' })

	await Post.findByIdAndDelete({_id: id})

	res.json({ message: 'Post deleted successfully.' })
}

export const placeBid = async (req, res) => {
	const { id } = req.params
	const { bid } = req.body

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

	//check if post was created by current user: req.userId
	const post = await Post.findById(id)
	if(!post) return res.status(404).json({ message: 'Post not found' })
	//check if post is an auction, if not return error
	if(post.type !== 'Auction') return res.status(401).json({ message: 'Post is not an auction' })

	//check if bid is higher than current bid
	if(bid <= post.bid) return res.status(401).json({ message: 'Bid must be higher than current bid' })

	const updatedPost = { bid: bid, bidderID: req.userId, bidCount: (post.bidCount+1) , _id: id }

	await Post.findByIdAndUpdate(id, updatedPost, { new: true })

	return res.json(updatedPost)
}


export default router
