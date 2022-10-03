import { Request, Response } from "express";
import { TypeUserSingUp } from '../types/userTypes';
import { authService } from '../services/authService';

async function createUser(req: Request, res: Response) {
    const { email, password }: TypeUserSingUp = res.locals.body;

    const user = await authService.createUser(email, password);

    return res.status(201).send(user);

}

export const authController = {
    createUser
} 