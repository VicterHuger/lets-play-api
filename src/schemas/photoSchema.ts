import joi from 'joi';
import { TypePhotoInsert } from '../types/photoType';

const photoSchema: joi.ObjectSchema<TypePhotoInsert> = joi.object({
    link: joi.string().pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'uri').pattern(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/, 'image uri').required().label('Link').messages({
        'string.required': '{#label} must be provided!',
        'string.empty': '{#label} must not be empty!',
        'string.pattern name': '{#label} must be a valid {#name}',
        'string.base': '{#label} must be a valid string'
    }),
    description: joi.string().label('Description').messages({
        'string.base': '{#label} must be a valid string'
    }),
})

export default photoSchema;