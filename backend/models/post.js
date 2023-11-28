import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
	title: String,
	description: String,
	creator: String,
	image: String,
	tags: {
		type: [String],
		default: [],
	},
	price: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	bid: {
		type: Number,
		default: null,
	},
	bidderID: {
		type: String,
		default: '',
	},

})

let Post = mongoose.model('Post', postSchema)

export default Post
