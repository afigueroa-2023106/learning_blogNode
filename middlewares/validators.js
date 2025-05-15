import { body } from "express-validator"
import { validateErrors } from "./validate.errors.js"
import { customIsValidObjectId, isValidTitle, isValidContent, isValidDuration, isValidLevel, existPostId, isValidCommentContent} from "../utils/db.validators.js";

export const postValidator = [
    body('title')
        .notEmpty()
        .isLength({ max: 100 })
        .custom(isValidTitle),
    body('content')
        .notEmpty()
        .isLength({ min: 20 })
        .custom(isValidContent),
    body('course')
        .notEmpty()
        .custom(customIsValidObjectId),
    validateErrors
]

export const courseValidator = [
    body('name')
        .notEmpty()
        .isLength({ max: 25 }),
    body('durationWeeks')
        .notEmpty()
        .isNumeric()
        .custom(isValidDuration),
    body('level')
        .notEmpty()
        .custom(isValidLevel),
    validateErrors
]

export const commentValidator = [
    body('name')
        .notEmpty(),
    body('content')
        .notEmpty()
        .isLength({ min: 5 })
        .custom(isValidCommentContent),
    body('postId')
        .notEmpty()
        .custom(existPostId),
    validateErrors
]
