import joi from 'joi';
import { TypePhoneInsert } from "../types/phoneType";

const phoneSchema: joi.ObjectSchema<TypePhoneInsert> = joi.object({
    number: joi.string().length(13).pattern(/^[0-9]+$/, 'numbers').required().label('Number').messages({
        'string.required': '{#label} must be provided!',
        'string.empty': '{#label} must not be empty!',
        'string.pattern name': '{#label} must contains only {#name}',
        'string.base': '{#label} must be a valid string',
        'string.length': '{#label} must contains {#limit} digits'
    }),
});

export default phoneSchema;