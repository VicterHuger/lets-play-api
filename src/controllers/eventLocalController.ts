import { EventLocal } from "@prisma/client";
import { Request, Response } from "express";
import { TypeEventLocalInsert } from '../types/eventLocalType';
import { eventLocalService } from '../services/eventLocalService';

async function createEventLocal(_req: Request, res: Response) {
    const body: TypeEventLocalInsert = res.locals.body;

    const eventLocal: EventLocal = await eventLocalService.createEventLocal(body);

    return res.status(201).send(eventLocal);
}

export const eventLocalController = {
    createEventLocal,
}