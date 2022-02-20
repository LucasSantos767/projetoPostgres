const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'projetoknex'
    }
  });
  
  module.exports = knex;