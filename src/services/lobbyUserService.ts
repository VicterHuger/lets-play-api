import { LobbyUser } from "@prisma/client";
import { lobbyUserRepository } from "../repositories/lobbyUserRepository";
import { lobbyService } from "./lobbyService";
import { generateThrowErrorMessage } from "../utils/errorUtil";

async function createLobbyUser(lobbyId: number, userId: number) {

    await lobbyService.getLobbyById(lobbyId);

    const lobbyUserDb: LobbyUser | null = await lobbyUserRepository.findLobbyUserByIds(userId, lobbyId)

    if (lobbyUserDb) generateThrowErrorMessage('Conflict', 'You are already registered in this lobby');

    const lobbyUser: LobbyUser | null = await lobbyUserRepository.createLobbyUser(userId, lobbyId);

    if (!lobbyUser) generateThrowErrorMessage('InternalServerError', 'Something went wrong and it was not possible to create the lobbyUser');

    return lobbyUser;
}

export const lobbyUserService = {
    createLobbyUser
}