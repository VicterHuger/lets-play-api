import prisma from "../config/database"

async function getStateByUf(uf: string) {
    return prisma.state.findUnique({
        where: {
            uf
        }
    });
}

export const stateRepository = {
    getStateByUf
}