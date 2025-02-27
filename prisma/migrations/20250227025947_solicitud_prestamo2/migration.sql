/*
  Warnings:

  - Changed the type of `tipoVivienda` on the `SolicitudPrestamo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SolicitudPrestamo" DROP COLUMN "tipoVivienda",
ADD COLUMN     "tipoVivienda" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TipoViviend";
