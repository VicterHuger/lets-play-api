import joi from 'joi';
import { TypeEventLocalInsert } from '../types/eventLocalType';

const name = joi.string().min(10).max(100).pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, 'letters').label('Name').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
    'string.min': '{#label} must contains at least {#limit} characteres',
    'string.max': '{#label} must not contains more than {#limit} characteres',
    'string.pattern.name': '{#label} must contains {#name} and optional space',
});

const isPublic = joi.boolean().label('IsPublic').messages({
    'boolean.base': '{#label} must be true or false',
    'boolean.empty': '{#label} must not be empty!'
});

const isOutdoor = joi.boolean().label('IsOutdoor').messages({
    'boolean.base': '{#label} must be true or false',
    'boolean.empty': '{#label} must not be empty!'
});

const addressId = joi.number().positive().integer().label('AddressId').messages({
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

export const eventLocalSchema: joi.ObjectSchema<TypeEventLocalInsert> = joi.object().keys({
    name: name.required(),
    isPublic: isPublic.required,
    isOutdoor: isOutdoor.required,
    addressId: addressId.required(),
    photoId: photoId.required()
});

export const eventLocalAddressIdSchema: joi.ObjectSchema<{ addressId: number }> = joi.object().keys({
    addressId: addressId.required()
})