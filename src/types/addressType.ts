import { Address } from "@prisma/client";

export type TypeAdressSchema = Omit<Address, "id" | "street" | "neighborhood" | "cityId" | "createdAt" | "updatedAt">;

export interface ICepPromiseSuccessfull {
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
}
