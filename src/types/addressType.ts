import { Address } from "@prisma/client";

export type TypeAdressSchema = Omit<Address, "id" | "street" | "neighborhood" | "cityId" | "createdAt" | "updatedAt">;

export interface ICepPromiseSuccessfull {
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
}

type TypeAddressInsertNoComplement = Omit<Address, "id" | "createdAt" | "updatedAt" | "complement" | "number" | "cityId">;

export interface IAddressSchema extends TypeAddressInsertNoComplement {
    complement?: string,
    number?: string,
}

export interface IAddressInsert extends IAddressSchema {
    cityId: number
}