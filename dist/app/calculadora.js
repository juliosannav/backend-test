function operar(operacion = "", a, b) {
    if (operacion === 'suma') {
        return suma(a, b);
    }
    else if (operacion === 'resta') {
        return restar(a, b);
    }
    else if (operacion === 'multiplica') {
        return multiplicar(a, b);
    }
    else if (operacion === 'divide') {
        return dividir(a, b);
    }
    else if (operacion === 'potencia') {
        return potenciar(a, b);
    }
    else if (operacion === 'factor') {
        return factorial(a);
    }
}
function suma(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a + b;
}
function restar(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}
function multiplicar(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}
function dividir(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}
function potenciar(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede potenciar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a ** b;
}
function factorial(a) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
}
export { suma, operar, restar, multiplicar, dividir, potenciar, factorial };
//# sourceMappingURL=calculadora.js.map