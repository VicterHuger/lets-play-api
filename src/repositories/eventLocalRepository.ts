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

async function findEventLocalById(id: number) {
    return await prisma.eventLocal.findUnique({
        where: {
            id
        }
    })
}

export const eventLocalRepository = {
    createEventLocal,
    findEventLocalByAddressId,
    findEventLocalById
}