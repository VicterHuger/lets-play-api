import { PrismaClient } from '@prisma/client';
import { citiesFactory } from './factories/citiesFactory';
import { disconnectPrisma } from './factories/disconnectPrisma';
import { sportsFactory } from './factories/sportsFactory';
import { statesFactory } from './factories/statesFactory';

const prisma = new PrismaClient();

async function main() {
    await statesFactory();
    await citiesFactory();
    await sportsFactory();
    return;
}

main().catch(err => {
    console.log(err);
    process.exit(1);
}).finally(async () => {
    await disconnectPrisma();
});