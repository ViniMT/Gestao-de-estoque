/*
  Warnings:

  - You are about to alter the column `telefone` on the `Fornecedores` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fornecedores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Fornecedores" ("cnpj", "email", "id", "nome", "telefone") SELECT "cnpj", "email", "id", "nome", "telefone" FROM "Fornecedores";
DROP TABLE "Fornecedores";
ALTER TABLE "new_Fornecedores" RENAME TO "Fornecedores";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
