import { Router } from "express"
import {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
} from "./course.controller.js"
import { courseValidator } from "../../middlewares/validators.js"

const router = Router()

router.post('/', courseValidator, createCourse)
router.get('/', getCourses)
router.put('/:id', courseValidator, updateCourse)
router.delete('/:id', deleteCourse)

export default router
