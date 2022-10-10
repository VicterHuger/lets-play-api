import joi from 'joi';

const lobbyId = joi.number().positive().integer().label('LobbyId').messages({
    'number.base': '{#label} must be a valid integer',
    'number.empty': '{#label} must not be empty!',
    'number.required': '{#label} must be provided!',
    'number.positive': '{#label} must be a positive number'
});

export const lobbyUserSchemaInsert: joi.ObjectSchema<{ lobbyId: number }> = joi.object().keys({
    lobbyId: lobbyId.required()
});