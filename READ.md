Projeto DB - Relacional - PostgreSql

Tecnologias/Libs necessárias:
- express
- nodemon (como dev dependency)
- knex
- pg
- docker (opcional) docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres
- postgres
- node.js

Nome database: Projeto-knex

Tabelas:
- usuarios:
  - id
  - nome
  - email (unico)
  - senha
- produtos:
  - id
  - nome
  - bar_code (unico)
  - quantidade
- caixa:
  - id
  - id do usuario
  - id do produto
  - quantidade do produto

Rotas:
- usuarios:
  - listar usuarios;
  - exibir um usuario;
  - criar um usuario;
  - deletar usuario;
  - Descobrir e usar verbos PUT e PATCH
- produtos:
  - listar produtos;
  - exibir um produtos;
  - criar um produtos;
  - deletar produtos;
  - Descobrir e usar verbos PUT e PATCH
- caixa:
  - listar caixa;
  - exibir um caixa;
  - criar um caixa;
  - deletar caixa;
  - Descobrir e usar verbos PUT e PATCH

Arquivos obrigatórios:
src
index.js
server.js
routes.js
controllers
db
conexao.js
schema.sql

EXTRA (PARA TENTAR EM UMA BRANCH DIFERENTE DA APLICAÇÃO ORIGINAL)[não obrigatório]:
instalar as libs:
dotenv
bcrypt
jsonwebtoken

arquivos:
.env

Dentro da rota de criação do usuario, utilizar o bcrypt para criptografar a senha antes de ser salva no banco
e criar uma rota de login que busca o usuario no DB e compara a senha informada no body com a senha criptografada no banco (tentar entender como fazer isso)
caso seja igual retorne um token que dentro dele tenha todos os dados do usuario menos a senha (dica usar destructuring)
e alterar para que o cliente so possa interagir com as rotas de caixa e produto se ele estiver logado ou seja possua um token funcional
colocar os dados necessários no arquivo .env nas variáveis de ambiente e utilizar para conectar ao DB