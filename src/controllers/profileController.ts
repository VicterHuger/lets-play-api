import { Profile } from '@prisma/client';
import { Request, Response } from 'express';
import { profileService } from '../services/profileService';
import { TypeProfileInsert, TypeProfileUpdate } from '../types/profileType';

async function createProfile(_req: Request, res: Response) {
    const body: TypeProfileInsert = res.locals.body;
    const userId: number = res.locals.userId;

    console.log(body);

    const profile: Profile = await profileService.createProfile(body, userId);

    return res.status(201).send(profile);

}

async function updateProfile(_req: Request, res: Response) {
    const body: TypeProfileUpdate = res.locals.body;
    const id: number = res.locals.id;
    const userId: number = res.locals.userId;

    const profile: Profile = await profileService.updateProfile(body, id, userId);

    return res.status(201).send(profile);
}

export const profileController = {
    createProfile,
    updateProfile
} 