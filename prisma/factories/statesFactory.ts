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
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'AC', 'Acre') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'AL', 'Alagoas') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'AM', 'Amazonas') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'AP', 'Amapá') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'BA', 'Bahia') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'CE', 'Ceará') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'DF', 'Distrito Federal') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'ES', 'Espírito Santo') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'GO', 'Goiás') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'MA', 'Maranhão') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'MG', 'Minas Gerais') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'MS', 'Mato Grosso do Sul') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'MT', 'Mato Grosso') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'PA', 'Pará') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'PB', 'Paraíba') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'PE', 'Pernambuco') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'PI', 'Piauí') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'PR', 'Paraná') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'RJ', 'Rio de Janeiro') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'RN', 'Rio Grande do Norte') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'RO', 'Rondônia') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'RR', 'Roraima') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'RS', 'Rio Grande do Sul') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'SC', 'Santa Catarina') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'SE', 'Sergipe') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'SP', 'São Paulo') ON CONFLICT DO NOTHING;`,
        `INSERT INTO states ("updatedAt", "uf","name") VALUES (NOW(), 'TO', 'Tocantins') ON CONFLICT DO NOTHING;`];
    return sqlQueries;
}
