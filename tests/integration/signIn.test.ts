import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";
import jwt from 'jsonwebtoken';
import supertest from "supertest";
import { disconnectPrisma } from "../../prisma/factories/disconnectPrisma";
import { usersFactory } from "../../prisma/factories/usersFactory";
import app from '../../src/app';
import dotenv from 'dotenv';

dotenv.config();

describe('/POST sign-in', () => {
    beforeEach(async () => {
        await usersFactory.truncateUserTable();
    });

    afterAll(async () => {
        await disconnectPrisma();
    });

    const server = supertest(app);

    it('should return status 422 if an invalid body requisition be sent', async () => {

        const { status } = await server.post('/sign-in').send({});

        expect(status).toBe(422);
    });


    it('should return with status 401 if the email passed was not sign-up and all body properties are correct', async () => {

        const result = await server.post('/sign-in').send(usersFactory.createUser());

        expect(result.status).toBe(401);
    });

    it('should return with status 401 if the password passed is not correct for an email sign-up and all body properties are correct', async () => {
        const userSignUp: User = await usersFactory.insertUserInDb();

        const result = await server.post('/sign-in').send({
            email: userSignUp.email,
            password: faker.internet.password(),
        });
        expect(result.status).toBe(401);
    });

    it('should return with status 200 and a valid token for the user, if the all the required body properties are correct and the user has previously sign-up', async () => {

        const user = usersFactory.createUser(false);

        const userSignUp = await usersFactory.insertUserInDb(user);

        const result = await server.post('/sign-in').send(user);

        const { userId } = jwt.verify(result.body.token, process.env.TOKEN_SECRET_KEY) as { userId: number };

        expect(result.status).toBe(200);
        expect(typeof result.body.token).toBe('string');
        expect(result.body.token).not.toBe(null);
        expect(userSignUp.id).toBe(userId);

    });

})