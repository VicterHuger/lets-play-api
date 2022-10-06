import prisma from "../config/database";
import { IAddressInsert } from "../types/addressType";

async function getAddressByZipCodeNumberComplement(zipCode: string, number: string, complement: string) {
    complement = complement ?? 'no complement';
    number = number ?? 'no number';
    return await prisma.address.findUnique({
        where: {
            number_complement_zipCode: {
                zipCode: zipCode,
                complement,
                number
            }
        }
    })
}

async function createAddress(address: IAddressInsert) {
    return await prisma.address.create({
        data: address
    })
}

async function getAddressById(id: number) {
    return await prisma.address.findUnique({
        where: { id }
    })
}

export const addressRepository = {
    getAddressByZipCodeNumberComplement,
    createAddress,
    getAddressById
}