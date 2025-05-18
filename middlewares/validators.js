import { body } from "express-validator"
import { validateErrors } from "./validate.errors.js"
import {
  customIsValidObjectId,
  isValidTitle,
  isValidContent,
  isValidDuration,
  isValidLevel,
  existPostId,
  existCourseId,
  isValidCommentContent
} from "../utils/db.validators.js"

export const postValidator = [
  body("title")
    .notEmpty().withMessage("El título es obligatorio.")
    .isLength({ max: 100 }).withMessage("El título no debe exceder los 100 caracteres.")
    .custom(isValidTitle),
  body("content")
    .notEmpty().withMessage("El contenido es obligatorio.")
    .isLength({ min: 20 }).withMessage("El contenido debe tener al menos 20 caracteres.")
    .custom(isValidContent),
  body("course")
    .notEmpty().withMessage("El ID del curso es obligatorio.")
    .custom(customIsValidObjectId)
    .custom(existCourseId),
  validateErrors
]

export const postValidatorPut = [
  body("title")
    .notEmpty().withMessage("El título es obligatorio.")
    .isLength({ max: 100 }).withMessage("El título no debe exceder los 100 caracteres.")
    .custom(isValidTitle),
  body("content")
    .notEmpty().withMessage("El contenido es obligatorio.")
    .isLength({ min: 20 }).withMessage("El contenido debe tener al menos 20 caracteres.")
    .custom(isValidContent),
  validateErrors
]

export const courseValidator = [
  body("title")
    .notEmpty().withMessage("El nombre del curso es obligatorio.")
    .isLength({ max: 50 }).withMessage("El nombre del curso no debe exceder 50 caracteres."),
  body("instructor")
    .notEmpty().withMessage("El nombre del instructor es obligatorio."),
  body("durationWeeks")
    .notEmpty().withMessage("La duración del curso es obligatoria.")
    .isNumeric().withMessage("La duración debe ser un número.")
    .custom(isValidDuration),
  body("level")
    .notEmpty().withMessage("El nivel es obligatorio.")
    .custom(isValidLevel),
  validateErrors
]

export const commentValidator = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio."),
  body("content")
    .notEmpty().withMessage("El contenido del comentario es obligatorio.")
    .isLength({ min: 5 }).withMessage("El comentario debe tener al menos 5 caracteres.")
    .custom(isValidCommentContent),
  body("postId")
    .notEmpty().withMessage("El ID del post es obligatorio.")
    .custom(customIsValidObjectId)
    .custom(existPostId),
  validateErrors
]

export const commentValidatorPut = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio."),
  body("content")
    .notEmpty().withMessage("El contenido del comentario es obligatorio.")
    .isLength({ min: 5 }).withMessage("El comentario debe tener al menos 5 caracteres.")
    .custom(isValidCommentContent),
  validateErrors
]