import { body } from "express-validator";
import { validateErrors } from "./validate.errors.js";
import { customIsValidObjectId, isValidTitle, isValidContent, isValidDuration, isValidLevel, existPostId, isValidCommentContent, existEmail, existUsername, checkCourseAvailability, checkCommentAvailability } from "../utils/db.validators.js";

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
];

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
];

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
];

export const registerUserValidator = [
    body('name')
        .notEmpty(),
    body('surname')
        .notEmpty(),
    body('username')
        .notEmpty()
        .toLowerCase()
        .custom(existUsername),
    body('email')
        .notEmpty()
        .isEmail()
        .custom(existEmail),
    body('password')
        .notEmpty()
        .isStrongPassword()
        .isLength({ min: 8 })
        .matches(/[a-z]/)
        .matches(/[A-Z]/)
        .matches(/\d/),
    validateErrors
];

export const updateUserValidator = [
    body('username')
        .optional()
        .notEmpty()
        .toLowerCase()
        .custom(existUsername),
    body('email')
        .optional()
        .notEmpty()
        .isEmail()
        .custom(existEmail),
    validateErrors
];

export const updatePasswordValidator = [
    body('currentPassword')
        .notEmpty(),
    body('newPassword')
        .notEmpty()
        .isStrongPassword()
        .isLength({ min: 8 })
        .matches(/[a-z]/)
        .matches(/[A-Z]/)
        .matches(/\d/),
    validateErrors
];

export const userUpdate = [
    body('currentPassword')
        .notEmpty(),
    body('username')
        .optional()
        .notEmpty()
        .toLowerCase()
        .custom(existUsername),
    body('email')
        .optional()
        .notEmpty()
        .isEmail()
        .custom(existEmail),
    validateErrors
];

export const registerValidator = [
    body('name').notEmpty(),
    body('surname').notEmpty(),
    body('username').notEmpty().toLowerCase().custom(existUsername),
    body('email').notEmpty().isEmail().custom(existEmail),
    body('password')
        .notEmpty()
        .isStrongPassword()
        .isLength({ min: 8 })
        .matches(/[a-z]/)
        .matches(/[A-Z]/)
        .matches(/\d/),
    validateErrors
];
