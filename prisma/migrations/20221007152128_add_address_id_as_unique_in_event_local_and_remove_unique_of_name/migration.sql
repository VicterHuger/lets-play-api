/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `eventLocals` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "eventLocals_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "eventLocals_addressId_key" ON "eventLocals"("addressId");
