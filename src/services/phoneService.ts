import { phoneRepository } from '../repositories/phoneRepository';
import { Phone } from "@prisma/client";
import { generateThrowErrorMessage } from '../utils/errorUtil';

async function createPhone(number: string) {
    const phoneDb: Phone | null = await phoneRepository.findPhoneByNumber(number);

    if (!!phoneDb && phoneDb.number === number) generateThrowErrorMessage('Conflict', 'This phone is already registered');

    const result: Phone | null = await phoneRepository.createPhone(number);

    if (!result) generateThrowErrorMessage("InternalServerError", "Something went wrong and it was not possible to create a new phone");

    return result;

}



export const phoneService = {
    createPhone,
}