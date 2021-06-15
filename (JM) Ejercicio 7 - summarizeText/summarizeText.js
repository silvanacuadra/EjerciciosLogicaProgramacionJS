// 7) Programar una función que devuelva el texto recortado según el número de caracteres indicados, ej.: miFuncion("Hola Mundo", 4) devolverá "Hola".

const summarizeText = (string, n) => {
    (typeof string !== "string" || string === "")
        ? console.error(`La cadena de texto ingresada: "${string}" no es una cadena de caracteres válida`)
        : (n !== NaN && n >= 0)
            ? console.log(`El texto rescortado es igual a: ${string.slice(0, n)}`)
            : console.error(`El número ingresado: "${n}" no es un número válido`)
}

summarizeText("Hola Mundo", 4);
summarizeText("Silvana", 3);
summarizeText("Hola", -1); // Error
summarizeText(2, 5); // Error
summarizeText("Hola", "Chau"); // Error
summarizeText("", 4);