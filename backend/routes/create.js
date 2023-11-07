import express from "express"
import * as createControllers from "../controllers/create.js"
import auth from "../middleware/auth.js"
const router = express.Router()

router.post("/", auth, createControllers.createPost)

export default router
