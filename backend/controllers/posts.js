import express from 'express'
import mongoose from 'mongoose'
import Post from '../models/post.js'
const router = express.Router()

export const updatePost = async (req, res) => {
	const { id } = req.params
	const { title, message, selectedFile } = req.body

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

	const updatedPost = { title, message, selectedFile, _id: id }

	await Post.findByIdAndUpdate(id, updatedPost, { new: true })

	res.json(updatedPost)
}

export const deletePost = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

	await Post.findByIdAndDelete({_id: id})

	res.json({ message: 'Post deleted successfully.' })
}

export default router
