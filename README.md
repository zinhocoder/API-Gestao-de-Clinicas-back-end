# 🏥 Gestão de Clínicas - Back-end

Bem-vindo ao back-end da aplicação **Gestão de Clínicas**!
Esta API, desenvolvida em **Node.js** com **Express**, **Sequelize** e **PostgreSQL**, permite o gerenciamento completo de clínicas médicas, incluindo agendamentos, prontuários, estoque e finanças.

## 🗃️ Sumário
- [✨ Funcionalidades](#-funcionalidades)
- [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚡ Pré-requisitos](#-pré-requisitos)
- [⚖️ Configuração do Projeto](#-configuração-do-projeto)
- [▶️ Executando o Projeto](#-executando-o-projeto)
- [🔍 Endpoints da API](#-endpoints-da-api)
- [📃 Exemplos de Requisições](#-exemplos-de-requisições)
- [🌟 Testes](#-testes)
- [🛠️ Contribuição](#-contribuição)
- [📚 Licença](#-licença)

---

## ✨ Funcionalidades
- **Autenticação de Usuários** (Registro e login com JWT)
- **Gestão de Agendamentos** (CRUD de consultas)
- **Gestão de Prontuários** (CRUD de registros médicos)
- **Gestão de Estoque** (CRUD de produtos e insumos)
- **Gestão Financeira** (Registro de receitas/despesas e relatórios financeiros)

---

## ⚙️ Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para construção da API
- **Sequelize** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação segura de usuários
- **Swagger** - Documentação interativa da API
- **Bcrypt** - Hash de senhas
- **Dotenv** - Gerenciamento de variáveis de ambiente

---

## ⚡ Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (v16 ou superior)
- **PostgreSQL** (v12 ou superior)
- **Git** (opcional, para clonar o repositório)

---

## ⚖️ Configuração do Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/gestao-clinica-backend.git
cd gestao-clinica-backend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados
Crie um banco de dados no PostgreSQL:
```sql
CREATE DATABASE gestao_clinica;
```
Atualize o arquivo **.env**:
```env
DB_NAME=gestao_clinica
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=sua_chave_secreta
```

### 4. Execute as migrações e seeders
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all  # (Opcional)
```

---

## ▶️ Executando o Projeto
```bash
npm start
```
A API ficará disponível em **http://localhost:3000**.

Para acessar a documentação **Swagger**:
- **http://localhost:3000/api-docs**

---

## 🔍 Endpoints da API

### ✨ Autenticação
- **POST** `/api/auth/registrar` - Registro de usuário
- **POST** `/api/auth/login` - Login e geração de token

### ⚖️ Agendamentos
- **POST** `/api/agendamentos`
- **GET** `/api/agendamentos`
- **GET** `/api/agendamentos/:id`
- **PUT** `/api/agendamentos/:id`
- **DELETE** `/api/agendamentos/:id`

### 💼 Prontuários
- **POST** `/api/prontuarios`
- **GET** `/api/prontuarios`
- **GET** `/api/prontuarios/:id`
- **PUT** `/api/prontuarios/:id`
- **DELETE** `/api/prontuarios/:id`

### 💊 Estoque
- **POST** `/api/estoque`
- **GET** `/api/estoque`
- **GET** `/api/estoque/:id`
- **PUT** `/api/estoque/:id`
- **DELETE** `/api/estoque/:id`

### 💸 Finanças
- **POST** `/api/financas`
- **GET** `/api/financas`
- **GET** `/api/financas/:id`
- **PUT** `/api/financas/:id`
- **DELETE** `/api/financas/:id`

---

## 📃 Exemplos de Requisições
### 👤 Registro de Usuário
```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "senha123"
}
```

### 🔒 Login
```json
{
  "email": "joao@example.com",
  "senha": "senha123"
}
```

---

## 🌟 Testes
Para executar os testes automatizados:
```bash
npm test
```

---

## 🛠️ Contribuição
1. Faça um **fork** do repositório
2. Crie uma **branch** (`git checkout -b feature/nova-feature`)
3. Faça o **commit** (`git commit -m 'Adiciona nova feature'`)
4. Faça o **push** (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

---

## 📚 Licença
Este projeto está licenciado sob a **MIT License**. Consulte o arquivo **LICENSE** para mais detalhes.

---

Feito com ❤️ por **Roberto**.
