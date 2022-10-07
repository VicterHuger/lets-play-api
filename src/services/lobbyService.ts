import { Lobby } from '@prisma/client';
import { lobbyRepository } from '../repositories/lobbyRepository';
import { TypeLobbyInsert } from "../types/lobbyType";
import { generateThrowErrorMessage } from "../utils/errorUtil";
import { formatDateFormat, formatNumberFormat } from '../utils/formatUtil';

async function createLobby(lobbyPartial: TypeLobbyInsert, userHostId: number) {
    lobbyPartial.eventDate = formatDateFormat(lobbyPartial.eventDate);
    lobbyPartial.minParticipants = formatNumberFormat(lobbyPartial.minParticipants);
    lobbyPartial.maxParticipants = formatNumberFormat(lobbyPartial.maxParticipants);

    const lobbyDB: Lobby | null = await lobbyRepository.findLobbyByUserHostId_eventDate_eventTimeStart_eventLocalId_minParticipants(userHostId, lobbyPartial.eventDate, lobbyPartial.eventTimeStart, lobbyPartial.eventLocalId, lobbyPartial.minParticipants);

    if (lobbyDB) generateThrowErrorMessage('Conflict', 'You have already registered this lobby in database');

    const lobby: Lobby | null = await lobbyRepository.createLobby(lobbyPartial, userHostId);

    if (!lobby) generateThrowErrorMessage('InternalServerError', 'Something went wrong when creating a lobby in database');

    return lobby;

}

export const lobbyService = {
    createLobby
}