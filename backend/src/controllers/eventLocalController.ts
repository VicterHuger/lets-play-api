import { EventLocal } from "@prisma/client";
import { Request, Response } from "express";
import { TypeEventLocalInsert } from '../types/eventLocalType';
import { eventLocalService } from '../services/eventLocalService';

async function createEventLocal(_req: Request, res: Response) {
    const body: TypeEventLocalInsert = res.locals.body;

    const eventLocal: EventLocal = await eventLocalService.createEventLocal(body);

    return res.status(201).send(eventLocal);
}

async function getEventLocalByAddressId(_req: Request, res: Response) {
    const { addressId }: { addressId: number } = res.locals.param;

    const eventLocal: EventLocal = await eventLocalService.getEventLocalByAddressId(addressId);

    return res.status(200).send(eventLocal);
}

async function getEventLocalById(_req: Request, res: Response) {
    const id: number = res.locals.id;

    const eventLocal: EventLocal = await eventLocalService.getEventLocalById(id);

    return res.status(200).send(eventLocal);
}

export const eventLocalController = {
    createEventLocal,
    getEventLocalByAddressId,
    getEventLocalById
}