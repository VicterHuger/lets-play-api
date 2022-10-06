import { cityRepository } from '../repositories/cityRepository';
import { generateThrowErrorMessage } from '../utils/errorUtil';

async function getCityByNameAndStateId(name: string, stateId: number) {
    const cityDb = await cityRepository.getCityByNameAndStateId(name, stateId);

    if (!cityDb) {
        return await createCity(name, stateId);
    }

    return cityDb;
}

async function createCity(name: string, stateId: number) {
    const cityDb = await cityRepository.getCityByNameAndStateId(name, stateId);

    if (cityDb) generateThrowErrorMessage("Conflict", "This city is already registered in database");

    const city = await cityRepository.createCity(name, stateId);

    if (!city) generateThrowErrorMessage("InternalServerError", "Something went wrong and the city could not be registered");

    return city;
}

export const cityService = {
    getCityByNameAndStateId,
    createCity
}