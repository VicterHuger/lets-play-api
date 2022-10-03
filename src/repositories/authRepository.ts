import prisma from '../config/database';

async function createUser(email: string, password: string) {
    return prisma.user.create({
        data: {
            email, password
        }
    });
}

async function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
}

export const authRepository = {
    getUserByEmail,
    createUser
}