import { EventLocal } from "@prisma/client";

export type TypeEventLocalInsert = Omit<EventLocal, "id" | "createdAt" | "updatedAt">