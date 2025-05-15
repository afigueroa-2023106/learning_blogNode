import { Router } from "express"
import {
  saveComment,
  getComment,
  getAllComments,
  updateComment,
  deleteComment
} from "./comment.controller.js"

const api = Router()

api.post('/', saveComment)
api.get('/', getAllComments)
api.get('/:id', getComment)
api.put('/:id', updateComment)
api.delete('/:id', deleteComment)

export default api
