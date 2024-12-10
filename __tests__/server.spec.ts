import app from '../src/server.js';
import request from 'supertest';

describe("Bateria de test de servidor", () => {

    test("Servidor en endpoint /", async () => {

        return await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola mundo al usuario Julio Santibanez");
            });
    });

    test("Servidor en api-key", async () => {
        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("la apikey de mi aplicacion es: api-key");
            })
    })

    test("Servidor en opera", async () => {
        return await request(app)
            .get('/operar?operacion=suma&num1=10&num2=20')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 30");
            })
    })

    test("Servidor en palindromo", async () => {
        return await request(app)
            .get('/palindromo?frase=reconocer')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada es palindromo");
            })
    })

    test("Servidor en palindromo", async () => {
        return await request(app)
            .get('/palindromo?frase=reconoce')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada no es palindromo");
            })
    })

    test("Servidor en primo", async () => {
        return await request(app)
            .get('/primo?numero=7')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado es un numero primo");
            })
    })

    test("Servidor en primo", async () => {
        return await request(app)
            .get('/primo?numero=1')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado no es un numero primo");
            })
    })

});