import express from 'express'
import Post from '../models/post.js'
const router = express.Router()

export const getPosts = async (req, res) => {
	const { page } = req.query

	try {
		const LIMIT = 9
		const startIndex = (Number(page) - 1) * LIMIT
		const total = await Post.countDocuments({})
		const posts = await Post.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex)
		res.status(200).json({
			data: posts,
			currentPage: Number(page),
			numberOfPages: Math.ceil(total / LIMIT),
		})
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const getPost = async (req, res) => {
	const { id } = req.params

	try {
		const post = await Post.findById(id)
		res.status(200).json(post)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const getPostsBySearch = async (req, res) => {
	const { searchQuery } = req.query

	try {
		const title = new RegExp(searchQuery, 'i')
		const posts = await Post.find({ title })
		res.json({ data: posts })
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const getPostsByUser = async (req, res) => {
	const { userID } = req.params

	if(!userID) return res.status(400).json({ message: 'No user ID provided' })

	try {
		const posts = await Post.find({ creator: userID })
		res.status(200).json(posts)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export default router
