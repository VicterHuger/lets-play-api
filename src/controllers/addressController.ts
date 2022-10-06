import { Request, Response } from "express";
import { addressService } from '../services/addressService';
import { IAddressSchema, TypeAdressSchema } from "../types/addressType";

async function createAddress(_req: Request, res: Response) {
    const body: IAddressSchema = res.locals.body;

    const address = await addressService.createAddress(body);

    return res.status(201).send(address);
}

async function getAddress(_req: Request, res: Response) {
    const body: TypeAdressSchema = res.locals.body;

    const address = await addressService.getAddress(body);

    return res.status(200).send(address);
}
export const addressController = {
    createAddress,
    getAddress
}