import jwt from 'jsonwebtoken'
const secret = process.env.SECERT || 'test'

const auth = async (req, res, next) => {
	// console.log(req.headers)
	try {
		const token = req.headers.authorization
		let decodedData = jwt.verify(token, secret)
		req.userId = decodedData?.id
		if(req.body.userId && req.body.userId !== req.userId) {
			return res.status(401).json({ message: 'Unauthorized' })
		}
		next()
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export default auth
