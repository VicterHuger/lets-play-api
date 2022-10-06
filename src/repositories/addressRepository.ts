import prisma from "../config/database";

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


export const addressRepository = {
    getAddressByZipCodeNumberComplement,
}