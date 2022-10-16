import joi from 'joi';
import { TypeUserSingUp } from '../types/userTypes';

const signUpSchema: joi.ObjectSchema<TypeUserSingUp> = joi.object({
    email: joi.string().email().required().label('Email').messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} field is not allowed to be empty',
        'string.email': '{#label} must be a valid email!',
        'string.required': '{#label} field is required!'
    }),
    password: joi.string().pattern(/(?=.*?[A-Z])/, 'upercase letter').pattern(/(?=.*?[a-z])/, 'Lowercase letter').pattern(/(?=.*?[0-9])/, 'number').pattern(/(?=.*?[#?!@$%^&*-])/, 'special character').min(6).required().messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} field is not allowed to be empty',
        'string.required': '{#label} field is required!',
        'string.min': '{#label} must contains at least {#limit} characteres',
        'string.pattern.name': '{#label} must contains at least 1 {#name}'
    }),
    confirmPassword: joi.string().valid(joi.ref('password')).label('Confirm password').required().messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} field is not allowed to be empty',
        'string.required': '{#label} field is required!',
        'any.only': '{#label} field must be equal to password field'
    }),
})

export default signUpSchema;