import bcrypt from 'bcrypt';
import { authRepository } from '../repositories/authRepository';
import { generateThrowErrorMessage } from '../utils/errorUtil';
import { User } from '@prisma/client';


async function createUser(email: string, password: string) {

    const user: User | null = await authRepository.getUserByEmail(email);

    if (!!user && user.email === email) generateThrowErrorMessage('Conflict', 'This is email is already sign up');

    const hashPassword: string = bcrypt.hashSync(password, 10);

    const result: User = await authRepository.createUser(email, hashPassword);

    if (!result) generateThrowErrorMessage("InternalServerError", "Something went wrong and it was not possible to create a new user");

    delete result.password

    return result;

}

export const authService = {
    createUser
}