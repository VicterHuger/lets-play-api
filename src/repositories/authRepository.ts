import prisma from '../config/database';

async function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
}

export const authRepository = {
    getUserByEmail
}