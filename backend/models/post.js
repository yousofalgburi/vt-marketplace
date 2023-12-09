import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	creator: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'Price',
		required: true,
	},
	location: String,
	tag: String,
	price: {
		type: Number,
		default: null,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	bid: {
		type: Number,
		default: null,
	},
	bidderID: String,
	bidCount: {
		type: Number,
		default: 0,
	},
})

let Post = mongoose.model('Post', postSchema)

export default Post
