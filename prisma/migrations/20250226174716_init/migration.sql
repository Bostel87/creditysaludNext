-- CreateEnum
CREATE TYPE "TipoViviend" AS ENUM ('Propia', 'Alquilada', 'ConFam');

-- CreateTable
CREATE TABLE "Solicitud" (
    "id" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "procedimiento" TEXT NOT NULL,
    "monto" TEXT NOT NULL,
    "celular" INTEGER NOT NULL,
    "ciudad" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Solicitud_pkey" PRIMARY KEY ("id")
);
