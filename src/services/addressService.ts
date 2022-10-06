import { Address } from '@prisma/client';
import cep, { CEP } from 'cep-promise';
import { addressRepository } from '../repositories/addressRepository';
import { cityService } from '../services/cityService';
import { stateService } from '../services/stateService';
import { ICepPromiseSuccessfull, IAddressInsert, IAddressSchema, TypeAdressSchema } from '../types/addressType';
import { generateThrowErrorMessage } from '../utils/errorUtil';


async function createAddress(partialAddress: IAddressSchema) {

    const addressDataRaw = await getAddressInfoByZipCode(partialAddress.zipCode);

    const addressData = await changeUndefinedFieldsAddress(partialAddress, addressDataRaw);

    const addressDb = await addressRepository.getAddressByZipCodeNumberComplement(partialAddress.zipCode, partialAddress.number, partialAddress.complement);

    if (!!addressDb) generateThrowErrorMessage('Conflict', 'This address was already registered');

    const stateId = await getStateId(addressData.state);
    const cityId = await getCityId(addressData.city, stateId);

    const addressToBeInsert: IAddressInsert = constructObjectAddress(addressData.street, partialAddress.zipCode, addressData.neighborhood, cityId, partialAddress.complement, partialAddress.number);

    const address: Address | null = await addressRepository.createAddress(addressToBeInsert);

    if (!address) generateThrowErrorMessage('InternalServerError', 'Something went wrong and it was not possible to insert the new address');

    return address;
}

async function getAddress({ zipCode, complement, number }: TypeAdressSchema) {
    const result: Address | null = await addressRepository.getAddressByZipCodeNumberComplement(zipCode, number, complement);

    if (!result) generateThrowErrorMessage('NotFound', 'There is no address with the information passed!');

    return result;
}

async function getAddressById(id: number) {
    const address = await addressRepository.getAddressById(id);

    if (!address) generateThrowErrorMessage('NotFound', 'There is no address with this id');

    return address;
}

async function getAddressInfoByZipCode(code: string): Promise<ICepPromiseSuccessfull | never> {
    try {
        const address: CEP = await cep(code);

        delete address.service;

        return address;

    } catch (err) {
        generateThrowErrorMessage('UnprocessableEntity', 'Invalid zipcode!');
    }
}

async function changeUndefinedFieldsAddress(dataAddressUser: IAddressSchema, cepData: ICepPromiseSuccessfull) {
    const result = { ...cepData }
    for (const key of Object.keys(cepData)) {
        if (cepData[key] === undefined) {
            result[key] = dataAddressUser[key];
        }
    }
    return result;
}

async function getStateId(uf: string) {
    const state = await stateService.getStateByUf(uf);
    return state.id;
}

async function getCityId(name: string, stateId: number) {
    const city = await cityService.getCityByNameAndStateId(name, stateId);
    return city.id;
}


function constructObjectAddress(street: string, zipCode: string, neighborhood: string, cityId: number, complement?: string, number?: string) {

    const address = {
        street,
        number,
        complement,
        zipCode,
        neighborhood,
        cityId,
    }

    for (const key of Object.keys(address)) {
        if (address[key] === undefined) {
            delete address[key];
        }
    };

    return address;

}


export const addressService = {
    createAddress,
    getAddress,
    getAddressById
}