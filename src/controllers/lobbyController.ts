import { Lobby } from "@prisma/client";
import { Request, Response } from "express";
import { lobbyService } from '../services/lobbyService'

import { TypeLobbyInsert } from "../types/lobbyType";

export async function createLobby(_req: Request, res: Response) {
    const body: TypeLobbyInsert = res.locals.body;
    const userHostId: number = res.locals.userId;

    const lobby: Lobby = await lobbyService.createLobby(body, userHostId);

    return res.status(201).send(lobby);

}

export const lobbyController = {
    createLobby
}