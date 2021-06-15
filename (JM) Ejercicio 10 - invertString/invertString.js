// 10) Programar una función que invierta las palabras de una cadena de texto, ej:. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertString = (string) => {
    if (!string) {
        console.warn(`No se ha ingresado una cadena de texto`);
    }
    else if (typeof string === "string") {
        let invert = string.split("").reverse().join("");
        console.log(`La palabra invertida es igual a: "${invert}"`);
    }
    else {
        console.error(`El valor ingresado "${string}" no es una cadena de texto válida`);
    }
}

invertString("Hola Mundo");
invertString("Argentina");
invertString();
invertString(8);