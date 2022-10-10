import prisma from "../config/database";

async function getAllSports() {
    return await prisma.sport.findMany({
        orderBy: {
            name: "asc"
        }
    });
}

export const sportRepository = {
    getAllSports
}