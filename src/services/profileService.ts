import { profileRepository } from '../repositories/profileRepository';
import { authService } from './authService';
import { TypeProfileInsert, TypeProfileUpdate } from '../types/profileType';
import { generateThrowErrorMessage } from '../utils/errorUtil';
import { photoService } from './photoService';
import { phoneService } from './phoneService';
import { addressService } from './addressService';
import { Profile } from '@prisma/client';
import { formatDateFormat } from '../utils/formatUtil';


async function createProfile(profileSchema: TypeProfileInsert, userId: number) {

    const profileDb = await profileRepository.getProfileByUserId(userId);

    if (!!profileDb) generateThrowErrorMessage('Conflict', 'There is already a profile registered in database for this user');

    profileSchema.birthday = formatDateFormat(profileSchema.birthday);

    const user = await authService.findUserById(userId);

    if (!user) generateThrowErrorMessage('NotFound', 'There is no user with this userId');

    await photoService.getPhotoById(profileSchema.photoId);

    await phoneService.getPhoneById(profileSchema.phoneId);

    await addressService.getAddressById(profileSchema.addressId);

    const profile = await profileRepository.createProfile(profileSchema, userId);

    if (!profile) generateThrowErrorMessage('InternalServerError', 'Something went wrong when inserting data into database and the profile could not be created');

    return profile;

}

async function updateProfile(profileSchema: TypeProfileUpdate, id: number, userId: number) {
    const profileDb = await profileRepository.getProfileById(id);

    if (!profileDb) generateThrowErrorMessage('NotFound', 'There is no profile registered in database for this user');

    if (profileDb.userId !== userId) generateThrowErrorMessage('Forbidden', `You are not allowed to update this profile`);

    const profile: Profile | null = await profileRepository.updateProfile(profileSchema, id);

    if (!profile) generateThrowErrorMessage('InternalServerError', 'Something went wrong and it was not possible to update the profile');

    return profile;

}

export const profileService = {
    createProfile,
    updateProfile
}