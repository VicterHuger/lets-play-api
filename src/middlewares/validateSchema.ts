import { Request, Response, NextFunction } from "express";
import joi from 'joi';
import { stripHtml } from 'string-strip-html';

interface ICustomRequestBody<T> extends Request {
    body: T
}


export function validateSchema<T>(schema: joi.ObjectSchema<T>) {
    return (req: ICustomRequestBody<T>, res: Response, next: NextFunction) => {
        const body = req.body;

        for (const key of Object.keys(body)) {
            if (typeof (body[key]) === "string") {
                body[key] = stripHtml(body[key])?.result.trim() ?? body[key];
            }
        }

        const { error }: { error: joi.ValidationError } = schema.validate(body, { abortEarly: false });
        if (error) {
            const errorText: string = error.details.reduce((prev: string, curr: joi.ValidationErrorItem) => {
                curr.message = errorUserAuthValidation(curr.message);
                return `${prev} \n ${curr.message}`;
            }, "");

            return res.status(422).send(errorText);
        }

        res.locals.body = body;

        return next();
    }
}

function errorUserAuthValidation(err: string) {

    if ((/\"email\" is required/).test(err)) {
        return 'Email field is required!\n';
    }
    if (err.includes('"email" is not allowed to be empty')) {
        return 'Email field is not allowed to be empty\n';
    }
    if ((/\"password\" is required/).test(err)) {
        return 'Password field is required!\n';
    }
    if (err.includes('"password" is not allowed to be empty')) {
        return 'Password field is not allowed to be empty!\n';
    }
    if ((/\"email" must be a valid email/).test(err)) {
        return 'Email must be a valid email!\n';
    }
    if (err.includes("/(?=.*?[A-Z])/")) {
        return 'Password must contain at least 1 capital character!\n';
    }
    if (err.includes("/(?=.*?[a-z])/")) {
        return 'Password must contain at least 1 lower case character!\n';
    }
    if (err.includes("/(?=.*?[0-9])/")) {
        return 'Password must contain at least 1 number!\n';
    }
    if (err.includes('/(?=.*?[#?!@$%^&*-])/')) {
        return 'Password must contain at least 1 special character!\n';
    }
    if (err.includes('"password" length must be at least 6 characters long')) {
        return 'Password must contain at least 6 characters long\n';
    }
    if (err.includes('"confirmPassword" must be [ref:password]')) {
        return `Passwords must be equal!\n`
    } else {
        return err + '\n';
    }
}
