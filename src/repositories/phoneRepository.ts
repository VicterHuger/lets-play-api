import prisma from "../config/database";

async function findPhoneByNumber(number: string) {
    return await prisma.phone.findUnique({
        where: { number }
    })
}

async function createPhone(number: string) {
    return await prisma.phone.create({
        data: { number }
    })
}

export const phoneRepository = {
    findPhoneByNumber,
    createPhone
}