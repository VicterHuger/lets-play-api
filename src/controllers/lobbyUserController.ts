import { LobbyUser } from "@prisma/client";
import { Request, Response } from "express"
import { lobbyUserService } from "../services/lobbyUserService";

async function createLobbyUser(_req: Request, res: Response) {
    const { lobbyId }: { lobbyId: number } = res.locals.param;
    const userId: number = res.locals.userId;

    const lobbyUser: LobbyUser = await lobbyUserService.createLobbyUser(lobbyId, userId);

    return res.status(201).send(lobbyUser);
}

export const lobbyUserController = {
    createLobbyUser
}