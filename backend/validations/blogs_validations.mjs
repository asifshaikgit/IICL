import { check, validationResult } from 'express-validator';
import { InvalidRequestError } from "../utils/error_handlers.mjs";

export const createBlogsValidation = async (req, res, next) => {
    let validations = [
        check("request_id")
            .trim()
            .escape()
            .notEmpty()
            .withMessage("Requset Id required"),
        check("title")
            .trim()
            .escape()
            .notEmpty()
            .withMessage("Title is required"),
        check('content')
            .trim()
            .escape()
            .notEmpty()
            .withMessage("Content is required"),
        check('author')
            .trim()
            .escape()
            .notEmpty()
            .withMessage("Author is required"),
    ];

    // Run the validation rules.
    for (var validation of validations) {
        var result = await validation.run(req);
        if (result.errors.length) break;
    }
    var errors = validationResult(req);

    if (errors.isEmpty()) {
        next()
    } else {
        next(new InvalidRequestError(errors.array()[0].msg));
    }
}