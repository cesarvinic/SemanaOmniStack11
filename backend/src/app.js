const express = require('express');
const cors = require('cors');

const { errors } = require('celebrate');

/*Recupera a variável declarada no arquivo routes.js */ 
const routes = require('./routes.js');

const app = express();

app.use(cors());
// app.use(cors({
//     origin: cesarvinicius.com.br;
// }));

app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333); /*Porta da aplicação*/
/*Comentado pois o arquivo index.js da pasta src/utils foi renomeado para app.js
* foi criado o arquivo server.js para "rotear" entre a aplicação e a aplicação de teste.
*/

module.exports = app;
