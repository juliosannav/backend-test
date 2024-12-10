
import { describe, test, expect } from "@jest/globals";
import {esPalindromo } from "../../src/app/palabras";


describe("Bateria de test de calculadora", () => {
    test("Sumar en la calculadora", () => {
        expect(esPalindromo("casa")).toBe(false);

    });

    test("Sumar en la calculadora", () => {
        expect(esPalindromo("")).toBe(false);

    });
});