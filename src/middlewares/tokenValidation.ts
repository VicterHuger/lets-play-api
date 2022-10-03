import { Request, Response, NextFunction } from 'express';
import { stripHtml } from 'string-strip-html';
import { generateThrowErrorMessage } from '../utils/errorUtil';
import jwt from 'jsonwebtoken'
import * as authService from '../services/authService';

export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization }: { authorization?: string } = req.headers;

    if (!authorization) return res.status(401).send("Headers authorization is missing!");

    const sanitizedHeaders: string = stripHtml(authorization).result.trim();

    const token: string | void = sanitizedHeaders?.replace("Bearer ", "") ?? generateThrowErrorMessage("Unauthorized", "Invalid token");

    if (!token || token === sanitizedHeaders) return res.status(401).send('Invalid token');

    try {
        const { userId } = jwt.verify(<string>token, process.env.TOKEN_SECRET_KEY) as { userId: number };

        if (isNaN(Number(userId))) return res.status(401).send('Invalid token');

        const user = await authService.findUserById(userId)

        if (!user) generateThrowErrorMessage("Unauthorized", "Invalid token");

        res.locals.userId = userId;

        next();

    } catch (err) {
        console.log(err);
        return res.status(401).send('Invalid token');
    }
}
