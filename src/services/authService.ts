import jwt from 'jsonwebtoken'
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

async function signIn(email: string, password: string) {
    const user: User | null = await authRepository.getUserByEmail(email);

    if (user === null || email !== user.email) generateThrowErrorMessage("Unauthorized", "Email or password invalid!");

    if (!bcrypt.compareSync(password, user.password)) generateThrowErrorMessage("Unauthorized", "Email or password invalid!");

    const token: string = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRES_IN });

    return token;
}

export const authService = {
    createUser,
    signIn
}