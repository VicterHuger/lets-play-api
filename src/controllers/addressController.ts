import { Request, Response } from "express";
import { addressService } from '../services/addressService';

async function createAddress(_req: Request, res: Response) {
    const body = res.locals.body;

    const address = await addressService.createAddress(body);

    return res.status(201).send(address);
}

export const addressController = {
    createAddress
}