import { Profile } from "@prisma/client";

export type TypeProfileInsert = Omit<Profile, "id" | "updatedAt" | "createdAt" | "score" | "isEmailVerified" | "isPhoneVerified" | "userId">;

export type TypeProfileUpdate = Partial<Profile>;


