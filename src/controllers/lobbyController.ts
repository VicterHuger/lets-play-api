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

export async function getLobbyById(_req: Request, res: Response) {
    const id: number = res.locals.id;

    const lobby = await lobbyService.getLobbyById(id);

    return res.status(200).send(lobby);

}

export async function getLobbies(_req: Request, res: Response) {

    const lobbies = await lobbyService.getLobbies();

    return res.status(200).send(lobbies);

}

export const lobbyController = {
    createLobby,
    getLobbyById,
    getLobbies
}