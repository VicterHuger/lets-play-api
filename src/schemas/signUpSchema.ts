import joi from 'joi';
import { TypeUserSingUp } from '../types/userTypes';

const signUpSchema: joi.ObjectSchema<TypeUserSingUp> = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(/(?=.*?[A-Z])/).pattern(/(?=.*?[a-z])/).pattern(/(?=.*?[0-9])/).pattern(/(?=.*?[#?!@$%^&*-])/).min(8).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
})

export default signUpSchema;