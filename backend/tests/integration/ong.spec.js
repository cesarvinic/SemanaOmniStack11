const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        //Antes de executar todas as migrations é importante fazer um Rollback
        //Importante "zerar" o banco antes de qualquer teste.
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    })

    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        //Para testar o cabeçalho da requisição:
        //.set('Authorization', '21da184b')
        .send({
            name: "APAD3",
            email: "contato@contato.com",
            whatsapp: "01234567891",
            city: "Rio do Sul",
            uf: "SC"
        });

        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});