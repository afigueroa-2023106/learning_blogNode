import { Router } from 'express'
import {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost,
} from './post.controller.js'

const postRouter = Router()

postRouter.post('/', createPost)
postRouter.get('/:id', getPostById)
postRouter.get('/', getAllPosts)
postRouter.put('/:id', updatePost)
postRouter.delete('/:id', deletePost)

export default postRouter

