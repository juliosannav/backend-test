export const esPrimo = (numero) => {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=numeros.js.map