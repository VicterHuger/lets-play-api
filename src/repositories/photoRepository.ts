import prisma from "../config/database";
import { TypePhotoInsert } from "../types/photoType";

async function findPhotoByLink(link: string) {
    return await prisma.photo.findUnique({ where: { link } });
};

async function createPhoto(photo: TypePhotoInsert) {
    return await prisma.photo.create({
        data: { ...photo }
    });
};

export const photoRepository = {
    findPhotoByLink,
    createPhoto
}