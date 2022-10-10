/*
  Warnings:

  - A unique constraint covering the columns `[uf]` on the table `states` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uf` to the `states` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "states" ADD COLUMN     "uf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "states_uf_key" ON "states"("uf");
