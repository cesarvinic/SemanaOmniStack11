const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

//Import Controllers 
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    }),
}), SessionController.create);

routes.get('/ongs', OngController.index);
//routes.post('/ongs', OngController.create);
/* Celebrate - Biblioteca para validação de dados */
routes.post('/ongs', celebrate({
    //Tipos de parâmetros aceitos.
    /*PARAMS        = 'params',
    HEADERS       = 'headers',
    QUERY         = 'query',
    COOKIES       = 'cookies',
    SIGNEDCOOKIES = 'signedCookies',
    BODY          = 'body',*/
    //Sempre que a chave de um objeto for uma variável do javascript é necessário colocar colches.
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        // whatsapp: Joi.number().required().min(10).max(14),
        whatsapp: Joi.string().required().length(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), OngController.create);

routes.get('/profile', celebrate({
    //Validar os Headers da requisição
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),    
    }),
}), IncidentController.index);

routes.post('/incidents', celebrate({
    //Validar os Headers da requisição
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    //Validar ao excluir um objeto
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

/*Exporta variável de dentro do arquivo. 
 *Será recuperada no arquivo index.js
 */
module.exports = routes;

