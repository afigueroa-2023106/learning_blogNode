import { Router } from "express"
import {
  saveComment,
  getComment,
  getAllComments,
  updateComment,
  deleteComment
} from "./comment.controller.js"
import { commentValidator, commentValidatorPut } from "../../middlewares/validators.js"

const api = Router()

api.post('/', commentValidator, saveComment)
api.get('/', getAllComments)
api.get('/:id', getComment)
api.put('/:id', commentValidatorPut, updateComment)
api.delete('/:id', deleteComment)

export default api
