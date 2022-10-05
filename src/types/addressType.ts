import { Address } from "@prisma/client";

export type TypeAdressSchema = Omit<Address, "id" | "street" | "neighborhood" | "cityId" | "createdAt" | "updatedAt">;