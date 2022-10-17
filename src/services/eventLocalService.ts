import { EventLocal } from '@prisma/client';
import { eventLocalRepository } from '../repositories/eventLocalRepository';
import { TypeEventLocalInsert } from '../types/eventLocalType';
import { generateThrowErrorMessage } from '../utils/errorUtil';

async function createEventLocal(eventLocal: TypeEventLocalInsert) {
    console.log(eventLocal.addressId);
    const eventLocalDb: EventLocal | null = await eventLocalRepository.findEventLocalByAddressId(eventLocal.addressId);

    if (!!eventLocalDb && eventLocal.addressId === eventLocalDb.addressId) generateThrowErrorMessage('Conflict', 'The local event you are trying to create already exist!');

    const eventLocalCreated: EventLocal | null = await eventLocalRepository.createEventLocal(eventLocal);

    if (!eventLocalCreated) generateThrowErrorMessage('InternalServerError', 'Something went wrong and the local event could not be created');

    return eventLocalCreated;
}

async function getEventLocalByAddressId(addressId: number) {
    const eventLocal = await eventLocalRepository.findEventLocalByAddressId(addressId);

    if (!eventLocal) generateThrowErrorMessage('NotFound', 'There is no event local with the address id informed');

    return eventLocal;

}

async function getEventLocalById(id: number) {
    const eventLocal = await eventLocalRepository.findEventLocalById(id);

    if (!eventLocal) generateThrowErrorMessage('NotFound', 'There is no event local with the id informed');

    return eventLocal;

}

export const eventLocalService = {
    createEventLocal,
    getEventLocalByAddressId,
    getEventLocalById
}