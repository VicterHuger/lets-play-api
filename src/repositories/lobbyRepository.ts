import prisma from "../config/database";
import { TypeLobbyInsert } from "../types/lobbyType";

async function findLobbyByUserHostId_eventDate_eventTimeStart_eventLocalId_minParticipants(userHostId: number, eventDate: Date, eventTimeStart: string, eventLocalId: number, minParticipants: number) {
    return await prisma.lobby.findUnique({
        where: {
            userHostId_eventDate_eventTimeStart_eventLocalId_minParticipants: {
                userHostId, eventDate, eventTimeStart, eventLocalId, minParticipants
            }
        }
    })
}

async function createLobby(lobbyInfo: TypeLobbyInsert, userId: number) {
    return await prisma.lobby.create({
        data: {
            userHostId: userId,
            ...lobbyInfo,
            lobbiesUsers: {
                create: {
                    userId
                }
            }
        },
        include: {
            lobbiesUsers: true
        }

    })
}

export const lobbyRepository = {
    findLobbyByUserHostId_eventDate_eventTimeStart_eventLocalId_minParticipants,
    createLobby
}