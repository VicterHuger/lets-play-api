import { Request, Response, NextFunction } from "express";
import joi from 'joi';
import { stripHtml } from "string-strip-html";
import { sanitizeObject } from "../utils/sanitizeUtil";

export function validateParamId(req: Request, res: Response, next: NextFunction) {
    const anyId: string = req.params.id;
    const id = Number(stripHtml(anyId).result.trim()) ?? null;
    if (!id) return res.status(422).send("Invalid id");
    res.locals.id = id;
    next();
}

export function validateParam<T>(schema: joi.ObjectSchema<{ [key: string]: T }>) {
    return (req: Request, res: Response, next: NextFunction) => {

        sanitizeObject<{ [key: string]: T }>(req.params as { [key: string]: T });

        const paramObject = req.params as { [key: string]: T };

        const { error }: { error: joi.ValidationError } = schema.validate(paramObject, { abortEarly: false, errors: { label: 'key', wrap: { label: false } } });
        if (error) {
            const errorText: string = error.details.reduce((prev: string, curr: joi.ValidationErrorItem) => {
                return `${prev} \n ${curr.message}`;
            }, "");

            return res.status(422).send(errorText);
        }

        res.locals.param = paramObject;

        return next();
    }
}
