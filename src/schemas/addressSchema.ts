import joi from 'joi';
import { IAddressSchema, TypeAdressSchema } from '../types/addressType';

export const addressSchemaCreate: joi.ObjectSchema<IAddressSchema> = joi.object({
    zipCode: joi.string().pattern(/^[0-9]+$/, 'numbers').length(8).required().label('Zipcode').messages({
        'string.required': '{#label} must be provided!',
        'string.empty': '{#label} must not be empty!',
        'string.pattern.name': '{#label} must contains only {#name}',
        'string.base': '{#label} must be a valid string',
        'string.length': '{#label} must have {#limit} numbers'
    }),
    number: joi.string().pattern(/^[0-9]+$/, 'numbers').label('Number').messages({
        'string.empty': '{#label} must not be empty!',
        'string.pattern.name': '{#label} must contains only {#name}',
        'string.base': '{#label} must be a valid string',
    }),
    complement: joi.string().label('Complement').messages({
        'string.base': '{#label} must be a valid string',
        'string.empty': '{#label} must not be empty!',
    }),
    neighborhood: joi.string().required().label('Neighborhood').messages({
        'string.base': '{#label} must be a valid string',
        'string.empty': '{#label} must not be empty!',
        'string.required': '{#label} must be provided!'
    }),
    street: joi.string().required().label('Street').messages({
        'string.base': '{#label} must be a valid string',
        'string.empty': '{#label} must not be empty!',
        'string.required': '{#label} must be provided!'
    })

});

export const AddressSchemaGet: joi.ObjectSchema<TypeAdressSchema> = joi.object({
    zipCode: joi.string().pattern(/^[0-9]+$/, 'numbers').length(8).required().label('Zipcode').messages({
        'string.required': '{#label} must be provided!',
        'string.empty': '{#label} must not be empty!',
        'string.pattern.name': '{#label} must contains only {#name}',
        'string.base': '{#label} must be a valid string',
        'string.length': '{#label} must have {#limit} numbers'
    }),
    number: joi.string().pattern(/^[0-9]+$/, 'numbers').label('Number').messages({
        'string.empty': '{#label} must not be empty!',
        'string.pattern.name': '{#label} must contains only {#name}',
        'string.base': '{#label} must be a valid string',
    }),
    complement: joi.string().label('Complement').messages({
        'string.base': '{#label} must be a valid string',
        'string.empty': '{#label} must not be empty!',
    }),
});