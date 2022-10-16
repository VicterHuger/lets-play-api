import joi from 'joi';
import { TypeProfileInsert, TypeProfileUpdate } from '../types/profileType';
import { Sex } from '@prisma/client';

const userName = joi.string().min(5).max(20).pattern(/(?![_.])/, ' _ or . at the beginning').pattern(/(?!.*[_.]{2})/, 'double _ or _. or ._ or .. inside').pattern(/[a-zA-Z0-9._]/, 'different characteres than letters, numbers, _ or .').pattern(/(?<![_.])/, ' _ or . at the end').label('UserName').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.pattern.name': '{#label} must not contains {#name}',
    'string.base': '{#label} must be a valid string',
    'string.min': '{#label} must contains at least {#limit} characteres',
    'string.max': '{#label} must not contains more than {#limit} characteres'
})

const name = joi.string().pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, 'letters').trim().label('Name').messages({
    'string.empty': '{#label} must not be empty!',
    'string.pattern.name': '{#label} must contains {#name} and optional space',
    'string.base': '{#label} must be a valid string',
    'string.required': '{#label} must be provided!'
});

const lastName = joi.string().pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/, 'letters').label('LastName').messages({
    'string.empty': '{#label} must not be empty!',
    'string.pattern.name': '{#label} must contains only {#name}',
    'string.base': '{#label} must be a valid string',
    'string.required': '{#label} must be provided!'
});

const birthday = joi.date().label('Birthday').messages({
    'date.base': '{#label} must be a valid date',
    'date.empty': '{#label} must not be empty!',
    'date.required': '{#label} must be provided!'
});


const sex = joi.string().valid(...Object.values(Sex)).label('Sex').messages({
    'string.base': '{#label} must be a valid string',
    'string.empty': '{#label} must not be empty!',
    'any.only': '{#label} value is not valid!',
    'string.required': '{#label} must be provided!'
});

const userId = joi.number().positive().integer().label('UserId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

const phoneId = joi.number().positive().integer().label('PhoneId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

const photoId = joi.number().positive().integer().label('PhotoId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

const addressId = joi.number().positive().integer().label('AddressId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

const score = joi.number().integer().label('Score').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
});

const isEmailVerified = joi.boolean().label('IsEmailVerified').messages({
    'boolean.base': '{#label} must be true or false',
    'boolean.empty': '{#label} must not be empty!'
});

const isPhoneVerified = joi.boolean().label('IsPhoneVerified').messages({
    'boolean.base': '{#label} must be true or false',
    'boolean.empty': '{#label} must not be empty!'
});

export const profileSchema: joi.ObjectSchema<TypeProfileInsert> = joi.object().keys({
    userName: userName.required(),
    name: name.required(),
    lastName: lastName.required(),
    birthday: birthday.required(),
    sex: sex.required(),
    phoneId: phoneId.required(),
    photoId: photoId.required(),
    addressId: addressId.required()
});

export const profileUpdateSchema: joi.ObjectSchema<TypeProfileUpdate> = joi.object().keys({
    userName,
    name,
    lastName,
    birthday,
    sex,
    phoneId,
    photoId,
    addressId
});