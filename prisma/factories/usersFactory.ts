import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database';
import { TypeUserSingIn } from '../../src/types/userTypes';

function createUser(isSignUp: boolean = false, isWrongPassword: boolean = false) {
    const password = isWrongPassword ? faker.internet.password(1) : '1qE%qwed13';

    const user = isSignUp
        ?
        {
            email: faker.internet.email(),
            password,
            confirmPassword: password
        }
        :
        {
            email: faker.internet.email(),
            password
        };

    return user;
}

async function insertUserInDb(user: TypeUserSingIn | null = null) {
    const data = user ? user : createUser();
    return await prisma.user.create({
        data
    });
}

async function truncateUserTable() {
    return await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
}

export const usersFactory = {
    createUser,
    insertUserInDb,
    truncateUserTable
}