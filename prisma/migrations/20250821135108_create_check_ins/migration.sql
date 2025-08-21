/*
  Warnings:

  - You are about to drop the column `desciption` on the `gyms` table. All the data in the column will be lost.
  - You are about to drop the column `latiutde` on the `gyms` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."gyms" DROP COLUMN "desciption",
DROP COLUMN "latiutde",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL;
