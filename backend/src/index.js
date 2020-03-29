const express = require('express');
const cors = require('cors');
/*Recupera a variável declarada no arquivo routes.js */ 
const routes = require('./routes.js');

const app = express();

app.use(cors());
// app.use(cors({
//     origin: cesarvinicius.com.br;
// }));

app.use(express.json());
app.use(routes);

app.listen(3333); /*Porta da aplicação*/