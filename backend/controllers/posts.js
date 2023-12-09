import express from 'express'
import mongoose from 'mongoose'
import Post from '../models/post.js'
const router = express.Router()

export const updatePost = async (req, res) => {
	const { id } = req.params
	const { title, description, image, location, price, tag } = req.body

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

	//check if post was created by current user: req.userId
	const post = await Post.findById(id)
	if(!post) return res.status(404).json({ message: 'Post not found' })
	if(post.creator !== req.userId) return res.status(401).json({ message: 'Unauthorized' })

	const updatedPost = { title, description, image, location, price, tag, _id: id }

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

export default router
