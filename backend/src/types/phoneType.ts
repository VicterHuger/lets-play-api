import { Phone } from '@prisma/client';

export type TypePhoneInsert = Omit<Phone, "id" | "updatedAt" | "createdAt">;