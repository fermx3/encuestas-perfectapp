/*
  Warnings:

  - Added the required column `encuestaId` to the `Response` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('text', 'single_choice', 'multi_choice', 'percentages_sum_100', 'ordered_list', 'number');

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "encuestaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Encuesta" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Encuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "encuestaId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "encuestaId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "questionType" "QuestionType" NOT NULL,
    "options" TEXT,
    "placeholder" TEXT,
    "maxLength" INTEGER,
    "count" INTEGER,
    "prefix" TEXT,
    "suffix" TEXT,
    "max" INTEGER,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
