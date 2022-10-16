import { User } from "@prisma/client";
import supertest from "supertest";
import { disconnectPrisma } from "../../prisma/factories/disconnectPrisma";
import { usersFactory } from "../../prisma/factories/usersFactory";
import app from '../../src/app';
import prisma from '../../src/config/database';

describe('POST /sign-up', () => {

    beforeEach(async () => {
        await usersFactory.truncateUserTable();
    });

    afterAll(async () => {
        await disconnectPrisma();
    });

    const server = supertest(app);

    it('should return 422 if an invalid schema is passed', async () => {
        const user = usersFactory.createUser(true, true);

        const { status } = await server.post('/sign-up').send(user);

        expect(status).toBe(422);

    });

    it('should return status 201, receive an user object and register user in database', async () => {
        const user = usersFactory.createUser(true);

        const result = await server.post('/sign-up').send(user);

        const userCreated: User | null = await prisma.user.findUnique({
            where: {
                email: user.email
            }
        });

        expect(result.status).toBe(201);
        expect(result.body).toMatchObject(expect.objectContaining({
            id: expect.any(Number),
            email: user.email,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            isBanned: expect.any(Boolean),
        }));
        expect(userCreated).not.toBe(null);
    });

    it('should return status 409 if sign up an user already registered (existing email)', async () => {

        const user = usersFactory.createUser();

        await usersFactory.insertUserInDb(user);

        const userSignUp = { email: user.email, password: user.password, confirmPassword: user.password };

        const { status } = await server.post('/sign-up').send(userSignUp);

        expect(status).toBe(409);
    });

});