import prisma from "../config/database";
async function findLobbyByUserHostId_eventDate_eventTimeStart_eventLocalId_minParticipants(userHostId: number, eventDate: Date, eventTimeStart: string, eventLocalId: number, minParticipants: number) {
    return await prisma.lobby.findUnique({
        where: {
            userHostId_eventDate_eventTimeStart_eventLocalId_minParticipants: {
                userHostId, eventDate, eventTimeStart, eventLocalId, minParticipants
            }
        }
    })
}

export const lobbyRepository = {
    findLobbyByUserHostId_eventDate_eventTimeStart_eventLocalId_minParticipants,
}