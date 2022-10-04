import { PrismaClient } from "@prisma/client";

export async function statesFactory() {

    const prisma = new PrismaClient();

    for (const sql of createStatesSqlInsert()) {
        await prisma.$executeRawUnsafe(sql);
    }

    return;
}

function createStatesSqlInsert() {
    const sqlQueries = [
        `INSERT INTO states ("uf","name") VALUES ('AC', 'Acre') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('AL', 'Alagoas') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('AM', 'Amazonas') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('AP', 'Amapá') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('BA', 'Bahia') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('CE', 'Ceará') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('DF', 'Distrito Federal') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('ES', 'Espírito Santo') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('GO', 'Goiás') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('MA', 'Maranhão') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('MG', 'Minas Gerais') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('MS', 'Mato Grosso do Sul') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('MT', 'Mato Grosso') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('PA', 'Pará') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('PB', 'Paraíba') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('PE', 'Pernambuco') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('PI', 'Piauí') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('PR', 'Paraná') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('RJ', 'Rio de Janeiro') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('RN', 'Rio Grande do Norte') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('RO', 'Rondônia') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('RR', 'Roraima') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('RS', 'Rio Grande do Sul') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('SC', 'Santa Catarina') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('SE', 'Sergipe') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('SP', 'São Paulo') ON CONFLICT DO NOTHING`,
        `INSERT INTO states ("uf","name") VALUES ('TO', 'Tocantins') ON CONFLICT DO NOTHING`];
    return sqlQueries;
}
