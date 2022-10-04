import { TypePhotoInsert } from "../types/photoType";
import { photoRepository } from '../repositories/photoRepository';
import { Photo } from "@prisma/client";
import { generateThrowErrorMessage } from '../utils/errorUtil';

async function createPhoto(photo: TypePhotoInsert) {
    const photoDb: Photo | null = await photoRepository.findPhotoByLink(photo.link);

    if (!!photoDb && photoDb.link === photo.link) generateThrowErrorMessage('Conflict', 'This photo is already registered');

    const result: Photo | null = await photoRepository.createPhoto(photo);

    if (!result) generateThrowErrorMessage("InternalServerError", "Something went wrong and it was not possible to create a new photo");

    return result;

}

export const photoService = {
    createPhoto,
}