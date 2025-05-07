/*
  Warnings:

  - You are about to drop the column `fornecedorId` on the `Materia_prima_comprada` table. All the data in the column will be lost.
  - You are about to drop the column `materiaPrimaCompradaId` on the `materias_prima` table. All the data in the column will be lost.
  - Added the required column `idFornecedor` to the `Materia_prima_comprada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMateriaPrimaComprada` to the `materias_prima` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Materia_prima_comprada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "idFornecedor" INTEGER NOT NULL,
    CONSTRAINT "Materia_prima_comprada_idFornecedor_fkey" FOREIGN KEY ("idFornecedor") REFERENCES "Fornecedores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Materia_prima_comprada" ("id", "nome", "quantidade", "tipo") SELECT "id", "nome", "quantidade", "tipo" FROM "Materia_prima_comprada";
DROP TABLE "Materia_prima_comprada";
ALTER TABLE "new_Materia_prima_comprada" RENAME TO "Materia_prima_comprada";
CREATE TABLE "new_materias_prima" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idEstoque" INTEGER NOT NULL,
    "composicao" TEXT NOT NULL,
    "idMateriaPrimaComprada" INTEGER NOT NULL,
    CONSTRAINT "materias_prima_idMateriaPrimaComprada_fkey" FOREIGN KEY ("idMateriaPrimaComprada") REFERENCES "Materia_prima_comprada" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "materias_prima_idEstoque_fkey" FOREIGN KEY ("idEstoque") REFERENCES "estoque_itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_materias_prima" ("composicao", "id", "idEstoque") SELECT "composicao", "id", "idEstoque" FROM "materias_prima";
DROP TABLE "materias_prima";
ALTER TABLE "new_materias_prima" RENAME TO "materias_prima";
CREATE UNIQUE INDEX "materias_prima_idEstoque_key" ON "materias_prima"("idEstoque");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
