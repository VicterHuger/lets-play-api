import prisma from '../config/database';

async function getCityByNameAndStateId(name: string, stateId: number) {
    return await prisma.city.findUnique({
        where: {
            name_stateId: { name, stateId }
        }
    })
}

