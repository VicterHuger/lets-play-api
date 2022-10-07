import prisma from "../config/database";
import { TypeEventLocalInsert } from "../types/eventLocalType";

async function createEventLocal(eventLocal: TypeEventLocalInsert) {
    return await prisma.eventLocal.create({
        data: eventLocal
    });
}

async function findEventLocalByAddressId(addressId: number) {
    return await prisma.eventLocal.findUnique({
        where: {
            addressId
        }
    })
}

export const eventLocalRepository = {
    createEventLocal,
    findEventLocalByAddressId,
}