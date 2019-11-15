# RoadMap
Principais passos de montagme da aplicação
- configuração da estrutura de diretórios:

```text
meetapp/
└── app/
      └── app/
      |    ├── models/
      |    │   ├── User.js
      |    └── controllers/
      |    |   ├── UserController.js
      |    └── middlewares/
      └── config/
      └── database/
          └── migrations/


```

- configuração do servidor, bem como dos modulos de bootstraping `src/app.js`, `routes.js` e `src/server.js`
- configuração do ESLint, apos instlar rodar `yarn eslint --init` e definir as propriedades do projeto
na configuração do ESLint foram adicionadas as seguintes rules:

`class-methods-use-this` que faz com que não seja mais obrigatório usar o this nos atributos da classe
`no-param-reassign` que permite a sobrescrita de parametros
`no-unused-vars` que pede pra parar de reclamar de variaveis não usadas, um exemplo é o `next` do express

### Running
Foi adicionado o script `dev` no `package.json`  para que o servidor seja startado com o nodemon, para evitar os erros provenientes da utilização do padrão `commonsjs` em substituição do `require`