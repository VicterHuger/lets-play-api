import joi from 'joi';
import { TypeUserSingUp } from '../types/userTypes';

const signUpSchema: joi.ObjectSchema<TypeUserSingUp> = joi.object({
    email: joi.string().email().required().label('Email').messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email field is not allowed to be empty',
        'string.email': 'Email must be a valid email!',
        'string.required': 'Email field is required!'
    }),
    password: joi.string().pattern(/(?=.*?[A-Z])/, 'upercase letter').pattern(/(?=.*?[a-z])/, 'Lowercase letter').pattern(/(?=.*?[0-9])/, 'number').pattern(/(?=.*?[#?!@$%^&*-])/, 'special character').min(6).required().messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password field is not allowed to be empty',
        'string.required': 'Password field is required!',
        'string.min': 'Password must contains at least {#limit} characteres',
        'string.pattern.name': 'Passwrod must contains at least 1 {#name}'
    }),
    confirmPassword: joi.string().valid(joi.ref('password')).label('Confirm password').required().messages({
        'string.base': 'Confirm password must be a string',
        'string.empty': 'Confirm password field is not allowed to be empty',
        'string.required': 'Confirm password field is required!',
        'any.only': 'Confirm password field must be equal to password field'
    }),
})

export default signUpSchema;