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

async function findLobbyById(id: number) {
    return await prisma.lobby.findUnique({
        where: {
            id
        }, select: {
            id: true,
            title: true,
            description: true,
            eventDate: true,
            eventTimeStart: true,
            eventTimeEnd: true,
            minParticipants: true,
            maxParticipants: true,
            allowedParticipants: true,
            createdAt: true,
            updatedAt: true,
            userHost: {
                select: {
                    createdAt: true,
                    profiles: {
                        select: {
                            userId: true,
                            userName: true,
                            sex: true,
                            score: true,
                            photo: {
                                select: {
                                    description: true,
                                    link: true
                                }
                            }

                        }
                    }
                }
            },
            sport: {
                select: {
                    name: true
                }
            },
            eventLocal: {
                select: {
                    name: true,
                    isPublic: true,
                    isOutdoor: true,
                    photo: {
                        select: {
                            description: true,
                            link: true
                        }
                    },
                    address: {
                        select: {
                            street: true,
                            number: true,
                            complement: true,
                            zipCode: true,
                            city: {
                                select: {
                                    name: true,
                                    state: {
                                        select: {
                                            name: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            lobbiesUsers: {
                orderBy: {
                    createdAt: 'asc'
                },
                skip: 1,
                select: {
                    user: {
                        select: {
                            createdAt: true,
                            profiles: {
                                select: {
                                    userId: true,
                                    userName: true,
                                    sex: true,
                                    score: true,
                                    photo: {
                                        select: {
                                            description: true,
                                            link: true
                                        }
                                    }

                                }
                            }
                        }

                    }
                }
            }
        }
    });
}

export const lobbyRepository = {
    findLobbyByUserHostId_eventDate_eventTimeStart_eventLocalId_minParticipants,
    createLobby,
    findLobbyById
}