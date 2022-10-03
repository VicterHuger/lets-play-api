import { User } from "@prisma/client";

export type TypeUserSingIn = Omit<User, "id" | "isBanned" | "createdAt" | "updatedAt">;

export interface IUserSingUp extends User {
    confirmPassword: string
}

export type TypeUserSingUp = Omit<IUserSingUp, "id" | "isBanned" | "createdAt" | "updatedAt">;