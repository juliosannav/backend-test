export const esPalindromo = (frase) => {
    if (!frase) {
        return false;
    }
    const fraseSinEspacios = frase.replace(/\s/g, "").toLowerCase();
    const fraseInvertida = fraseSinEspacios.split("").reverse().join("");
    return fraseSinEspacios === fraseInvertida;
};
//# sourceMappingURL=palabras.js.map