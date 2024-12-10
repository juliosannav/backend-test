import { describe, test, expect } from "@jest/globals";
import { suma, restar, operar,multiplicar,dividir,potenciar,factorial } from "../../src/app/calculadora";


describe("Bateria de test de calculadora", () => {

    test("Sumar en la calculadora", () => {

        expect(operar("suma",15, 15)).toBe(30);

    });


    test("Sumar en la calculadora", () => {
        expect(operar("suma", 1, 2)).toBe(3);
       expect(operar("suma",5, 5)).toBe(10);

        expect(operar("suma",15, 15)).toBe(30);

        expect(operar("suma",1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(operar("suma",a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    });
    test("Restar en la calculadora", () => {
        expect(restar(5, 2)).toBe(3);

        expect(restar(15, 5)).toBe(10);

        expect(restar(45, 15)).toBe(30);

        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
    });


    test("dividir en la calculadora", () => {
        expect(operar("divide",8, 2)).toBe(4);

        expect(operar("divide",40, 2)).toBe(20);

        expect(operar("divide",100, 2)).toBe(50);

        expect(operar("divide",10, 2)).toBe(5);

        let a: any = 1;
        let b: any = "a";
        expect(operar("divide",a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => operar("divide",a, b)).toThrowError("No se puede dividir indefinidos");
    });

    test("multiplicar en la calculadora", () => {
        expect(operar("multiplica",5, 2)).toBe(10);

        expect(operar("multiplica",20, 2)).toBe(40);

        expect(operar("multiplica",20, 2)).toBe(40);

        expect(operar("multiplica",20, 2)).toBe(40);

        let a: any = 1;
        let b: any = "a";
        expect(multiplicar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => multiplicar(a, b)).toThrowError("No se puede multiplicar indefinidos");
    });

    test("potenciar en la calculadora", () => {
        expect(operar("potencia",1, 100)).toBe(1.00);

       /* expect(potenciar(15, 5)).toBe(75);

        expect(potenciar(45, 15)).toBe(675);

        expect(potenciar(10, 5)).toBe(50);*/

        let a: any = 1;
        let b: any = "a";
        expect(potenciar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => potenciar(a, b)).toThrowError("No se puede potenciar indefinidos");
    });

    test("factorial en la calculadora", () => {
        expect(operar("factor",6,1)).toBe(720);

       /* expect(factorial(15, 5)).toBe(75);

        expect(factorial(45, 15)).toBe(675);

        expect(factorial(10, 5)).toBe(50);*/

    });


    test("Operar en la calculadora", () => {

        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("resta", 5, 2)).toBe(3);
        expect(operar("suma", 5, 5)).toBe(10);
        expect(operar("resta", 15, 5)).toBe(10);
        expect(operar("suma", 15, 15)).toBe(30);
        expect(operar("resta", 45, 15)).toBe(30);
        expect(operar("suma", 1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(operar("suma", a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => operar("suma", a, b)).toThrowError("No se puede sumar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("resta", a, b)).toThrowError("No se puede restar indefinidos");

        expect(operar(undefined, 10, 20)).not.toBeDefined();

        expect(operar("multiplicar", 10, 20)).not.toBeDefined();
    });


   

   

});