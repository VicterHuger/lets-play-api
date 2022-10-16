import prisma from '../config/database';

async function getCityByNameAndStateId(name: string, stateId: number) {
    return await prisma.city.findUnique({
        where: {
            name_stateId: { name, stateId }
        }
    })
}

async function createCity(name: string, stateId: number) {
    return await prisma.city.create({
        data: {
            name, stateId
        }
    })
}

export const cityRepository = {
    getCityByNameAndStateId,
    createCity
} 