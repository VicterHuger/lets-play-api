import { Phone } from "@prisma/client";
import { Request, Response } from "express";
import { TypePhoneInsert } from '../types/phoneType';
import { phoneService } from '../services/phoneService';

async function createPhone(_req: Request, res: Response) {
    const { number }: TypePhoneInsert = res.locals.body;

    const phone: Phone = await phoneService.createPhone(number);

    return res.status(201).send(phone);
}

async function getPhoneByNumber(__req: Request, res: Response) {
    const { number }: TypePhoneInsert = res.locals.body;

    const phone: Phone = await phoneService.getPhoneByNumber(number);

    return res.status(200).send(phone);
}

export const phoneController = {
    createPhone,
    getPhoneByNumber
}