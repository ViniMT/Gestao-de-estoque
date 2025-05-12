# 📦 Sistema de Gestão de Estoque - Fábrica

Sistema desenvolvido para realizar o controle de estoque de uma fábrica, facilitando a entrada, saída e rastreamento de produtos, além de gerar relatórios e alertas de baixa de estoque.

---

## 🛠 Tecnologias Utilizadas

- [ ] Backend: `Python` / `C# (.NET)`
- [ ] Banco de Dados: `MySQL` / `PostgreSQL`
- [ ] Frontend: `HTML`, `CSS`, `JavaScript` / `Blazor` (se for .NET)
- [ ] API REST (se aplicável)
- [ ] Swagger (documentação)
- [ ] Docker (opcional)
- [ ] Git + GitHub

---

## 📚 Funcionalidades

- ✅ Cadastro de produtos
- ✅ Controle de entradas e saídas de estoque
- ✅ Registro de fornecedores e categorias
- ✅ Geração de relatórios por período
- ✅ Alerta de estoque mínimo
- ✅ Histórico de movimentações
- ✅ Autenticação de usuários (admin e operadores)

---

## 🧱 Estrutura de Tabelas (Exemplo)

### Produtos
| Campo           | Tipo        | Descrição                    |
|----------------|-------------|------------------------------|
| id              | INT         | Identificador único          |
| nome            | VARCHAR     | Nome do produto              |
| categoria_id    | INT         | Categoria associada          |
| quantidade      | INT         | Quantidade em estoque        |
| estoque_minimo  | INT         | Limite para alerta           |

### Movimentações
| Campo         | Tipo    | Descrição                    |
|---------------|---------|------------------------------|
| id            | INT     | Identificador único          |
| produto_id    | INT     | Produto relacionado          |
| tipo          | ENUM    | `entrada` ou `saida`         |
| quantidade    | INT     | Quantidade movimentada       |
| data          | DATETIME| Data da movimentação         |

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/estoque-fabrica.git
   cd estoque-fabrica
# 📦 Sistema de Gestão de Estoque - Fábrica

Sistema desenvolvido para realizar o controle de estoque de uma fábrica, facilitando a entrada, saída e rastreamento de produtos, além de gerar relatórios e alertas de baixa de estoque.

---

## 🛠 Tecnologias Utilizadas

- [ ] Backend: `Python` / `C# (.NET)`
- [ ] Banco de Dados: `MySQL` / `PostgreSQL`
- [ ] Frontend: `HTML`, `CSS`, `JavaScript` / `Blazor` (se for .NET)
- [ ] API REST (se aplicável)
- [ ] Swagger (documentação)
- [ ] Docker (opcional)
- [ ] Git + GitHub

---

## 📚 Funcionalidades

- ✅ Cadastro de produtos
- ✅ Controle de entradas e saídas de estoque
- ✅ Registro de fornecedores e categorias
- ✅ Geração de relatórios por período
- ✅ Alerta de estoque mínimo
- ✅ Histórico de movimentações
- ✅ Autenticação de usuários (admin e operadores)

---

## 🧱 Estrutura de Tabelas (Exemplo)

### Produtos
| Campo           | Tipo        | Descrição                    |
|----------------|-------------|------------------------------|
| id              | INT         | Identificador único          |
| nome            | VARCHAR     | Nome do produto              |
| categoria_id    | INT         | Categoria associada          |
| quantidade      | INT         | Quantidade em estoque        |
| estoque_minimo  | INT         | Limite para alerta           |

### Movimentações
| Campo         | Tipo    | Descrição                    |
|---------------|---------|------------------------------|
| id            | INT     | Identificador único          |
| produto_id    | INT     | Produto relacionado          |
| tipo          | ENUM    | `entrada` ou `saida`         |
| quantidade    | INT     | Quantidade movimentada       |
| data          | DATETIME| Data da movimentação         |

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/estoque-fabrica.git
   cd estoque-fabrica
