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

async function getPhoneByNumber(number: string) {
    const phone: Phone | null = await phoneRepository.findPhoneByNumber(number);

    if (!phone || phone.number !== number) generateThrowErrorMessage('NotFound', `This phone doesn't exist in database`);

    return phone;
}

async function getPhoneById(id: number) {
    const phone: Phone | null = await phoneRepository.findPhoneById(id);

    if (!phone || phone.id !== id) generateThrowErrorMessage('NotFound', `There isn't a phone with this id!`);

    return phone;
}



export const phoneService = {
    createPhone,
    getPhoneByNumber,
    getPhoneById
}