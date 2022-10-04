import { Photo } from "@prisma/client";
import { Request, Response } from "express";
import { TypePhotoInsert } from '../types/photoType';
import { photoService } from '../services/photoService';

async function createPhoto(_req: Request, res: Response) {
    const body: TypePhotoInsert = res.locals.body;

    const photo: Photo = await photoService.createPhoto(body);

    return res.status(201).send(photo);
}

async function getPhotoByLink(_req: Request, res: Response) {
    const body: TypePhotoInsert = res.locals.body;

    const photo: Photo = await photoService.getPhotoByLink(body.link);

    return res.status(201).send(photo);

}

export const photoController = {
    createPhoto,
    getPhotoByLink
}