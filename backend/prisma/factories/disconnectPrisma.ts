import prisma from '../../src/config/database';

export async function disconnectPrisma() {
    return await prisma.$disconnect();
}