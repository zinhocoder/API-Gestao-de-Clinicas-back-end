Gestão de Clínicas - Back-end
Este é o back-end da aplicação Gestão de Clínicas, uma API desenvolvida em Node.js com Express e Sequelize para gerenciar agendamentos, prontuários, estoque e finanças de clínicas médicas.

Sumário
Funcionalidades

Tecnologias Utilizadas

Pré-requisitos

Configuração do Projeto

Executando o Projeto

Endpoints da API

Exemplos de Requisições

Testes

Contribuição

Licença

Funcionalidades
Autenticação de Usuários:

Registro de novos usuários.

Login com geração de token JWT.

Gestão de Agendamentos:

Criar, listar, atualizar e excluir agendamentos.

Gestão de Prontuários:

Criar, listar, atualizar e excluir prontuários.

Gestão de Estoque:

Adicionar, listar, atualizar e excluir itens do estoque.

Gestão Financeira:

Registrar receitas e despesas.

Gerar relatórios financeiros.

Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.

Express: Framework para construção da API.

Sequelize: ORM para interação com o banco de dados.

PostgreSQL: Banco de dados relacional.

JWT (JSON Web Tokens): Autenticação de usuários.

Swagger: Documentação interativa da API.

Bcrypt: Criptografia de senhas.

Dotenv: Gerenciamento de variáveis de ambiente.

Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Node.js (v16 ou superior)

PostgreSQL (v12 ou superior)

Git (opcional, para clonar o repositório)

Configuração do Projeto
Clone o repositório (ou baixe o código-fonte):

bash

git clone https://github.com/seu-usuario/gestao-clinica-backend.git
cd gestao-clinica-backend
Instale as dependências:

bash

npm install
Configure o banco de dados:

Crie um banco de dados no PostgreSQL chamado gestao_clinica.

Atualize as credenciais no arquivo .env:


DB_NAME=gestao_clinica
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=sua_chave_secreta
Execute as migrações:

bash

npx sequelize-cli db:migrate
Execute os seeders (opcional, para dados iniciais):

bash

npx sequelize-cli db:seed:all
Executando o Projeto
Inicie o servidor:

bash

npm start
Acesse a API:

A API estará disponível em http://localhost:3000.

Acesse a documentação Swagger:

Acesse http://localhost:3000/api-docs para visualizar a documentação interativa da API.

Endpoints da API
Autenticação
POST /api/auth/registrar: Registra um novo usuário.

POST /api/auth/login: Realiza o login e retorna um token JWT.

Agendamentos
POST /api/agendamentos: Cria um novo agendamento.

GET /api/agendamentos: Lista todos os agendamentos.

GET /api/agendamentos/:id : Busca um agendamento pelo ID.

PUT /api/agendamentos/:id : Atualiza um agendamento pelo ID.

DELETE /api/agendamentos/:id : Exclui um agendamento pelo ID.

Prontuários
POST /api/prontuarios: Cria um novo prontuário.

GET /api/prontuarios: Lista todos os prontuários.

GET /api/prontuarios/:id : Busca um prontuário pelo ID.

PUT /api/prontuarios/:id : Atualiza um prontuário pelo ID.

DELETE /api/prontuarios/:id : Exclui um prontuário pelo ID.

Estoque
POST /api/estoque: Adiciona um novo item ao estoque.

GET /api/estoque: Lista todos os itens do estoque.

GET /api/estoque/:id : Busca um item pelo ID.

PUT /api/estoque/:id : Atualiza um item pelo ID.

DELETE /api/estoque/:id : Exclui um item pelo ID.

Finanças
POST /api/financas: Registra uma nova transação financeira.

GET /api/financas: Lista todas as transações financeiras.

GET /api/financas/:id : Busca uma transação pelo ID.

PUT /api/financas/:id : Atualiza uma transação pelo ID.

DELETE /api/financas/:id : Exclui uma transação pelo ID.

Exemplos de Requisições
Registro de Usuário
Requisição:

bash

POST /api/auth/registrar
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "senha123"
}
Resposta:

json

{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@example.com",
  "createdAt": "2023-10-10T12:00:00.000Z",
  "updatedAt": "2023-10-10T12:00:00.000Z"
}
Login
Requisição:

bash

POST /api/auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "senha": "senha123"
}
Resposta:

json

{
  "token": "seu_token_jwt"
}
Testes
Para executar os testes, use o comando:

bash

npm test
Contribuição
Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas alterações (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Roberto.

Esse README está completo e organizado, cobrindo todos os aspectos importantes do projeto. Se precisar de mais ajustes ou informações adicionais, é só avisar! 
