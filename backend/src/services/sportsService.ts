import { Sport } from "@prisma/client";
import { generateThrowErrorMessage } from "../utils/errorUtil";
import { sportRepository } from '../repositories/sportRepository';

async function listAllSports() {
    const sports: Sport[] = await sportRepository.getAllSports();

    if (!sports) generateThrowErrorMessage('InternalServerError', 'Something went wrong and it was not possible to list all sports');

    return sports;
}

export const sportService = {
    listAllSports
}