import joi from 'joi';
import { Allowed, Status } from '@prisma/client';
import { TypeLobbyInsert } from '../types/lobbyType';

const status = joi.string().valid(...Object.values(Status)).label('Status').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
    'any.only': '{#label} value is not valid!',
});

const title = joi.string().min(10).max(100).pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, 'letters').label('Title').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
    'string.min': '{#label} must contains at least {#limit} characteres',
    'string.max': '{#label} must not contains more than {#limit} characteres',
    'string.pattern.name': '{#label} must contains {#name} and optional space',
});

const description = joi.string().max(255).label('Description').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
    'string.max': '{#label} must not contains more than {#limit} characteres',
});

const eventDate = joi.date().label('EventDate').messages({
    'date.base': '{#label} must be a valid date',
    'date.empty': '{#label} must not be empty!',
    'date.required': '{#label} must be provided!'
});

const eventTimeStart = joi.string().label('EventTimeStart').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
});

const eventTimeEnd = joi.string().label('EventTimeEnd').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
});

const minParticipants = joi.number().positive().min(2).label('MinParticipants').messages({
    'number.required': '{#label} must be provided!',
    'number.empty': '{#label} must not be empty!',
    'number.base': '{#label} must be a valid number',
    'number.min': '{#label} must be at least {#limit}'
});

const maxParticipants = joi.number().positive().min(2).label('MaxParticipants').messages({
    'number.required': '{#label} must be provided!',
    'number.empty': '{#label} must not be empty!',
    'number.base': '{#label} must be a valid number',
    'number.min': '{#label} must be at least {#limit}',
});

const allowedParticipants = joi.string().valid(...Object.values(Allowed)).label('AllowedParticipants').messages({
    'string.required': '{#label} must be provided!',
    'string.empty': '{#label} must not be empty!',
    'string.base': '{#label} must be a valid string',
    'any.only': '{#label} value is not valid!',
})

const userHostId = joi.number().positive().integer().label('UserHostId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

const sportId = joi.number().positive().integer().label('SportId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

const eventLocalId = joi.number().positive().integer().label('EventLocalId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

export const lobbyInsertSchema: joi.ObjectSchema<TypeLobbyInsert> = joi.object().keys({
    title: title.required(),
    status: status.required(),
    description,
    eventDate: eventDate.required(),
    eventTimeStart: eventTimeStart.required(),
    eventTimeEnd: eventTimeEnd.required(),
    minParticipants: minParticipants.required(),
    maxParticipants: maxParticipants.required(),
    allowedParticipants: allowedParticipants.required(),
    sportId: sportId.required(),
    eventLocalId: eventLocalId.required()
});