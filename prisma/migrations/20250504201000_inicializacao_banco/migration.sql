-- CreateTable
CREATE TABLE "Usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fornecedores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Materia_prima_comprada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "fornecedorId" INTEGER NOT NULL,
    CONSTRAINT "Materia_prima_comprada_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "materias_prima" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idEstoque" INTEGER NOT NULL,
    "composicao" TEXT NOT NULL,
    "materiaPrimaCompradaId" INTEGER NOT NULL,
    CONSTRAINT "materias_prima_materiaPrimaCompradaId_fkey" FOREIGN KEY ("materiaPrimaCompradaId") REFERENCES "Materia_prima_comprada" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "materias_prima_idEstoque_fkey" FOREIGN KEY ("idEstoque") REFERENCES "estoque_itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "estoque_itens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "unidadeMedida" TEXT NOT NULL,
    "precoUnitario" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "idFornecedor" INTEGER,
    CONSTRAINT "estoque_itens_idFornecedor_fkey" FOREIGN KEY ("idFornecedor") REFERENCES "Fornecedores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idEstoque" INTEGER NOT NULL,
    "codigoBarras" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    CONSTRAINT "produtos_idEstoque_fkey" FOREIGN KEY ("idEstoque") REFERENCES "estoque_itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipoCliente" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "vendas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataVenda" DATETIME NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "valorTotal" REAL NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "vendas_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vendas_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens_venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vendaId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorUnitario" REAL NOT NULL,
    CONSTRAINT "itens_venda_vendaId_fkey" FOREIGN KEY ("vendaId") REFERENCES "vendas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "itens_venda_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "estoque_itens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "materias_prima_idEstoque_key" ON "materias_prima"("idEstoque");

-- CreateIndex
CREATE UNIQUE INDEX "produtos_idEstoque_key" ON "produtos"("idEstoque");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
