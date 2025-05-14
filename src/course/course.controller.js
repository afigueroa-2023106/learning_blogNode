import Course from './course.model.js'

export const createCourse = async (req, res) => {
    try {
        const data = req.body
        const newCourse = new Course(data)
        await newCourse.save()
        return res.send({
            success: true,
            message: 'Course created'
        })
    } catch (e) {
        return res.status(500).send({
            success: false,
            message: 'Error creating course',
            error: e.message
        })
    }
}

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find().sort({ createdAt: -1 })
        return res.send({
            success: true,
            message: 'Courses found',
            courses
        })
    } catch (e) {
        return res.status(500).send({
            success: false,
            message: 'Error fetching courses',
            error: e.message
        })
    }
}

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const updated = await Course.findByIdAndUpdate(id, data, { new: true })
        if (!updated) {
            return res.status(404).send({
                success: false,
                message: 'Course not found'
            })
        }
        return res.send({
            success: true,
            message: 'Course updated',
            course: updated
        })
    } catch (e) {
        return res.status(500).send({
            success: false,
            message: 'Error updating course',
            error: e.message
        })
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Course.findByIdAndDelete(id)
        if (!deleted) {
            return res.status(404).send({
                success: false,
                message: 'Course not found'
            })
        }
        return res.send({
            success: true,
            message: 'Course deleted',
            course: deleted
        })
    } catch (e) {
        return res.status(500).send({
            success: false,
            message: 'Error deleting course',
            error: e.message
        })
    }
}
