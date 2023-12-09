import jwt from 'jsonwebtoken'
import UserModel from '../models/user.js'; // Import your User model

const secret = process.env.SECERT || 'test'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        let decodedData = jwt.verify(token, secret)
        req.userId = decodedData?.id

        // Check if user exists in database
        const userExists = await UserModel.findById(req.userId)
        if (!userExists) return res.status(401).json({ message: 'Unauthorized' })

        if(req.body.userId && req.body.userId !== req.userId) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        next()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default auth