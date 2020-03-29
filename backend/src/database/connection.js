const knex = require('knex'); 
const configuration = require('../../knexfile');

//Conexão de desenvolvimento
const connection = knex(configuration.development);

//Exporta a conexão com o banco de dados
module.exports = connection;