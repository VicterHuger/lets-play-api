import joi from 'joi';
import { TypeUserSingIn } from '../types/userTypes';

const signInSchema: joi.ObjectSchema<TypeUserSingIn> = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export default signInSchema;