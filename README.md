# Boas vindas ao repositório do API de Blogs!

Aplicação desenvolvida em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer um post é necessário usuário e login, portanto é trabalhada a **relação entre** `user` e `post`. Também é necessário a utilização de categorias para os posts, assim estabelecendo a relação de `posts` para `categorias` e de `categorias` para `posts`.

Começando pela API, foram desenvolvidos alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados.

Primeiro, foi criada uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, uma tabela de Categorias para Posts e, em seguida, a tabela de Posts, que guarda todas as informações dos posts realizados na plataforma.

---

### Instruções para rodar o projeto:

1. Instale as dependências

  * `npm install`

</br>

2. Configure o arquivo .env
* Variáveis:

    `host: process.env.HOSTNAME`

    `user: process.env.MYSQL_USER`

    `password: process.env.MYSQL_PASSWORD`

_Observação: há um arquivo `.env.example` para referência._

</br>

3. Rode o seguinte comando para criar o banco de dados e as tabelas:
  
  * `npm prestart`

</br>


4. Rode o seguinte comando para popular o banco de dados:
  
* `npm run seed`

</br>

6. Rode a aplicação

* `npm start` 
</br>

  ou

</br>

* `npm run debug` (inicia com nodemon)

---
