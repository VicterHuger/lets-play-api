import joi from 'joi';
import { TypeUserSingIn } from '../types/userTypes';

const signInSchema: joi.ObjectSchema<TypeUserSingIn> = joi.object({
    email: joi.string().email().required().label('Email').messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} field is not allowed to be empty',
        'string.email': '{#label} must be a valid email!',
        'string.required': '{#label} field is required!'
    }),
    password: joi.string().label('Password').required().messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} field is not allowed to be empty',
        'string.required': '{#label} field is required!'
    }),
})

export default signInSchema;