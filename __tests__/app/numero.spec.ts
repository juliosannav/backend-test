import { describe, test, expect } from "@jest/globals";

import {esPrimo } from "../../src/app/numeros";


describe("Bateria de test de calculadora", () => {
    test("Sumar en la calculadora", () => {
        expect(esPrimo(2)).toBe(true);

    });

    test("Sumar en la calculadora", () => {
        expect(esPrimo(1)).toBe(false);

    });
    test("Sumar en la calculadora", () => {
        expect(esPrimo(3)).toBe(true);

    });

    test("Sumar en la calculadora", () => {
        expect(esPrimo(10)).toBe(false);

    });
});