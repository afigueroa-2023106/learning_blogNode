import { Router } from "express"
import {
  saveComment,
  getComment,
  getAllComments,
  updateComment,
  deleteComment
} from "./comment.controller.js"

const api = Router()

api.post('/addComment', saveComment)
api.get('/allComments', getAllComments)
api.get('/getComment/:id', getComment)
api.put('/updateComment/:id', updateComment)
api.delete('/deleteComment/:id', deleteComment)

export default api
