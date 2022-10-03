import { Request, Response } from "express";
import { TypeUserSingUp, TypeUserSingIn } from '../types/userTypes';
import { authService } from '../services/authService';

async function createUser(req: Request, res: Response) {
    const { email, password }: TypeUserSingUp = res.locals.body;

    const user = await authService.createUser(email, password);

    return res.status(201).send(user);

}

async function singInUser(req: Request, res: Response) {
    const { email, password }: TypeUserSingIn = res.locals.body;

    const token = await authService.signIn(email, password);

    return res.status(200).send({ token });

}

export const authController = {
    createUser,
    singInUser
} 