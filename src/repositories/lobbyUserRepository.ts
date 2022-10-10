import prisma from '../config/database';

async function findLobbyUserByIds(userId: number, lobbyId: number) {
    return await prisma.lobbyUser.findUnique({
        where: {
            userId_lobbyId: {
                userId,
                lobbyId
            }
        }
    });
}

async function createLobbyUser(userId: number, lobbyId: number) {
    return await prisma.lobbyUser.create({
        data: {
            lobbyId,
            userId
        }
    })
}

export const lobbyUserRepository = {
    findLobbyUserByIds,
    createLobbyUser
}