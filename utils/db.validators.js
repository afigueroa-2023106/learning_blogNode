import { isValidObjectId } from 'mongoose'
import Course from '../src/course/course.model.js'
import Post from '../src/post/post.model.js'
import User from '../src/user/user.model.js'
import Comment from '../src/comment/comment.model.js'

export const customIsValidObjectId = (id) => {
    if (!isValidObjectId(id)) {
        throw new Error(`Invalid ObjectId: ${id}`)
    }
    return true
}

export const existCourseId = async (courseId) => {
    customIsValidObjectId(courseId);
    const course = await Course.findById(courseId)
    if (!course) {
        throw new Error(`Course not found for ID: ${courseId}`)
    }
    return true
}

export const checkCourseAvailability = async (courseId) => {
    customIsValidObjectId(courseId)
    const course = await Course.findById(courseId)
    if (!course) {
        throw new Error(`Course not found for ID: ${courseId}`)
    }
    const existingPost = await Post.findOne({ course: courseId })
    if (existingPost) {
        throw new Error(`Course with ID ${courseId} is already associated with a post`)
    }
}

export const isValidLevel = (level) => {
    const validLevels = ['beginner', 'intermediate', 'advanced']
    if (!validLevels.includes(level)) {
        throw new Error(`Invalid level: ${level}`)
    }
    return true
}

export const isValidDuration = (duration) => {
    if (isNaN(duration) || duration < 1) {
        throw new Error(`Invalid duration: ${duration}`)
    }
    return true
}

export const isValidTitle = (title) => {
    if (title.length > 25) {
        throw new Error(`Title is too long: ${title}`)
    }
    return true
}

export const isValidContent = (content) => {
    if (content.length < 20) {
        throw new Error(`Content is too short: ${content}`)
    }
    return true
}

export const isValidCommentContent = (content) => {
    if (content.length < 5) {
        throw new Error(`Comment content is too short: ${content}`)
    }
    return true
}

export const existPostId = async (postId) => {
    customIsValidObjectId(postId);
    const post = await Post.findById(postId)
    if (!post) {
        throw new Error(`Post not found for ID: ${postId}`)
    }
}

export const checkCommentAvailability = async (postId) => {
    customIsValidObjectId(postId)
    const post = await Post.findById(postId)
    if (!post) {
        throw new Error(`Post not found for ID: ${postId}`)
    }
    const existingComment = await Comment.findOne({ postId })
    if (existingComment) {
        throw new Error(`This post already has an associated comment`)
    }
}
