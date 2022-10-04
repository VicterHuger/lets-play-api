import prisma from "../config/database";

async function findPhoneByNumber(number: string) {
    return await prisma.phone.findUnique({ where: { number } })
}

export const phoneRepository = {
    findPhoneByNumber
}