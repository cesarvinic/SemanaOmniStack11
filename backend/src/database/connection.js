const knex = require('knex'); 
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? 
    configuration.test: 
    configuration.development;

//Conexão de desenvolvimento
//const connection = knex(configuration.development);
const connection = knex(config);

//Exporta a conexão com o banco de dados
module.exports = connection;