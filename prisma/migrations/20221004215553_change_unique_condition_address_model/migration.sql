/*
  Warnings:

  - A unique constraint covering the columns `[number,complement,zipCode]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "addresses_street_number_complement_zipCode_cityId_key";

-- CreateIndex
CREATE UNIQUE INDEX "addresses_number_complement_zipCode_key" ON "addresses"("number", "complement", "zipCode");
