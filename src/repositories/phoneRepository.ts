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

async function findPhoneById(id: number) {
    return await prisma.phone.findUnique({
        where: {
            id
        }
    });
}

export const phoneRepository = {
    findPhoneByNumber,
    createPhone,
    findPhoneById
}