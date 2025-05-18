import { isValidObjectId } from "mongoose"
import Course from "../src/course/course.model.js"
import Post from "../src/post/post.model.js"
import Comment from "../src/comment/comment.model.js"

export const customIsValidObjectId = (id) => {
  if (!isValidObjectId(id)) {
    throw new Error(`ID no válido: ${id}`)
  }
  return true
}

export const existCourseId = async (courseId) => {
  customIsValidObjectId(courseId)
  const course = await Course.findById(courseId)
  if (!course) {
    throw new Error(`No se encontró un curso con el ID: ${courseId}`)
  }
  return true
}

export const existPostId = async (postId) => {
  customIsValidObjectId(postId)
  const post = await Post.findById(postId)
  if (!post) {
    throw new Error(`No se encontró una publicación con el ID: ${postId}`)
  }
  return true
}

export const isValidLevel = (level) => {
  const validLevels = ["Cuarto", "Quinto", "Sexto"]
  if (!validLevels.includes(level)) {
    throw new Error(`Nivel inválido: ${level}. Debe ser Cuarto, Quinto o Sexto.`)
  }
  return true
}

export const isValidDuration = (duration) => {
  if (isNaN(duration) || duration < 1) {
    throw new Error(`Duración inválida: ${duration}. Debe ser un número mayor a 0.`)
  }
  return true
}

export const isValidTitle = (title) => {
  if (title.length > 100) {
    throw new Error(`El título es demasiado largo (máx. 100 caracteres).`)
  }
  return true
}

export const isValidContent = (content) => {
  if (content.length < 20) {
    throw new Error("El contenido debe tener al menos 20 caracteres.");
  }
  return true;
}

export const isValidCommentContent = (content) => {
  if (content.length < 5) {
    throw new Error("El comentario debe tener al menos 5 caracteres.")
  }
  return true
}
