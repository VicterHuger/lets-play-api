import { Sport } from '@prisma/client';
import { Request, Response } from 'express';
import { sportService } from '../services/sportsService';

async function listAllSports(req: Request, res: Response) {
    const sports: Sport[] = await sportService.listAllSports();

    return res.status(200).send(sports);
}

export const sportController = {
    listAllSports
}