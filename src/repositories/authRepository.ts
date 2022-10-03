import prisma from '../config/database';

async function createUser(email: string, password: string) {
    return prisma.user.create({
        data: {
            email, password
        }
    });
}

async function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
}

async function findUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
}

export const authRepository = {
    getUserByEmail,
    createUser,
    findUserById
}