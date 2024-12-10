import express from 'express';
import { configuration } from '../config.js';
import { esPalindromo } from '../app/palabras.js';
import { esPrimo } from '../app/numeros.js';
import { operar } from '../app/calculadora.js';
let mainRouter = express.Router();
mainRouter.get("/", (_req, res) => {
    return res.send(`Hola mundo al usuario ${configuration.username}`);
});
mainRouter.get("/apikey", (_req, res) => {
    return res.send(`la apikey de mi aplicacion es: ${configuration.apikey}`);
});
mainRouter.get("/operar", (req, res) => {
    const { operacion, num1, num2 } = req.query;
    let resultado = operar(operacion, +num1, +num2);
    return res.send(`El resultado de la operacion es: ${resultado}`);
});
mainRouter.get("/palindromo", (req, res) => {
    const frase = req.query.frase;
    return res.send(`Hola, La frase ingresada ${esPalindromo(frase) ? "es" : "no es"} palindromo`);
});
mainRouter.get("/primo", (req, res) => {
    const numero = req.query.numero;
    return res.send(`Hola, el numero ingresado ${esPrimo(+numero) ? "es" : "no es"} un numero primo`);
});
export default mainRouter;
//# sourceMappingURL=main-route.js.map