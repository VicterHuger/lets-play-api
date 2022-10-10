import { Lobby } from "@prisma/client";

export type TypeLobbyInsert = Omit<Lobby, "id" | "createdAt" | "updatedAt" | "userHostId">