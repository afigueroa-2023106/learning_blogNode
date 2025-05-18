import { Router } from 'express'
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} from '../post/post.controller.js'
import { postValidator, postValidatorPut } from "../../middlewares/validators.js"

const router = Router()

router.post('/', postValidator, createPost)
router.get('/', getPosts)
router.get('/:id', getPostById)
router.put('/:id', postValidatorPut, updatePost)
router.delete('/:id', deletePost)

export default router
