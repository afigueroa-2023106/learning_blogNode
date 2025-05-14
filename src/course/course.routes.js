import { Router } from "express"
import {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse
} from "./course.controller.js"

const api = Router()

api.post('/createCourse', createCourse)
api.get('/getCourses', getCourses)
api.put('/updateCourse/:id', updateCourse)
api.delete('/deleteCourse/:id', deleteCourse)

export default api
