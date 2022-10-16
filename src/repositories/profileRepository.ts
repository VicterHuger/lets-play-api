import prisma from "../config/database";
import { TypeProfileInsert, TypeProfileUpdate } from '../types/profileType';

async function getProfileByUserId(userId: number) {
    return await prisma.profile.findUnique({
        where: { userId }
    });
}

async function createProfile(profile: TypeProfileInsert, userId: number) {
    return await prisma.profile.create({
        data: { ...profile, userId }
    });
}

async function getProfileById(id: number) {
    return await prisma.profile.findUnique({
        where: {
            id
        }
    });
}

async function updateProfile(profileInfo: TypeProfileUpdate, id: number) {
    return await prisma.profile.update({
        where: {
            id
        },
        data: profileInfo
    })
}

export const profileRepository = {
    createProfile,
    getProfileByUserId,
    getProfileById,
    updateProfile
}