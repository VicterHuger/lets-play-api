import prisma from "../config/database";

async function findPhotoByLink(link: string) {
    return await prisma.photo.findUnique({ where: { link } })
}

export const photoRepository = {
    findPhotoByLink
}