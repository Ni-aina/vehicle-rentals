/*
  Warnings:

  - You are about to drop the column `birthDay` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthDay",
ADD COLUMN     "birthday" TIMESTAMP(3);
