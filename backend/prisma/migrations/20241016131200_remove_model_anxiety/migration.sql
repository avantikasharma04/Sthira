/*
  Warnings:

  - You are about to drop the `AnxietyForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnxietyForm" DROP CONSTRAINT "AnxietyForm_userId_fkey";

-- DropTable
DROP TABLE "AnxietyForm";
