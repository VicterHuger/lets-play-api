import prisma from "../config/database";
async function findEventLocalByAddressId(addressId: number) {
    return await prisma.eventLocal.findUnique({
        where: {
            addressId
        }
    })
}

export const eventLocalRepository = {
    createEventLocal,
}