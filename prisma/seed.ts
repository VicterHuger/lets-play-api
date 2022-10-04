import { PrismaClient } from '@prisma/client';
import { citiesFactory } from './factories/citiesFactory';
import { statesFactory } from './factories/statesFactory';

const prisma = new PrismaClient();

async function main() {
    await statesFactory();
    await citiesFactory();
    return;
}

main().catch(err => {
    console.log(err);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect()
});