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

async function findPhotoById(id: number) {
    return await prisma.photo.findUnique({
        where: {
            id
        }
    });
};

export const photoRepository = {
    findPhotoByLink,
    createPhoto,
    findPhotoById
}