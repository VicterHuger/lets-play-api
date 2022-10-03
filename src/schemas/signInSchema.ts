import joi from 'joi';
import { TypeUserSingIn } from '../types/userTypes';

const signInSchema: joi.ObjectSchema<TypeUserSingIn> = joi.object({
    email: joi.string().email().required().label('Email').messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email field is not allowed to be empty',
        'string.email': 'Email must be a valid email!',
        'string.required': 'Email field is required!'
    }),
    password: joi.string().label('Password').required().messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password field is not allowed to be empty',
        'string.required': 'Password field is required!'
    }),
})

export default signInSchema;