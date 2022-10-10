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

export const lobbyUserRepository = {
    findLobbyUserByIds,
}