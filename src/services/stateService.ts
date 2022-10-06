import { stateRepository } from "../repositories/stateRepository";
import { generateThrowErrorMessage } from "../utils/errorUtil";

async function getStateByUf(uf: string) {
    const state = await stateRepository.getStateByUf(uf);
    if (!state) generateThrowErrorMessage('NotFound', 'There is no state with this name');
    return state;
}

export const stateService = {
    getStateByUf
}