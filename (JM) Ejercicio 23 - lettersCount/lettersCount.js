// 23) Programar una función que dada una cadena de texto cuente el número de vocales y consonantes, ej: miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const lettersCount = (text = undefined) => {

    if (text === undefined) return console.warn(`No ingresaste una cadena de texto`);

    if (typeof text !== "string") return console.error(`El valor ingresado "${text}" NO es una cadena de texto válida`)

    if (/[0-9]/.test(text)) return console.error(`El valor no admite caracteres numéricos`);

    if (/[\$%&\?¿!¡\.,;(...)]/.test(text)) return console.error(`El valor no admite caracteres especiales`);

    let vocales = /[aeiouáéíóú]/i,
        contadorVocales = 0,
        contadorConsonantes = 0,

        arregloTexto = text.split("");

    for (letra of arregloTexto) {
        if (letra === " ") continue;

        else if (vocales.test(letra)) contadorVocales++;

        else contadorConsonantes++;
    }

    console.log(`El texto "${text}" tiene ${contadorVocales} letras vocales y ${contadorConsonantes} letras consonantes`)
}

lettersCount("Hola Mundo");
lettersCount("Qué lindo día");

// Probando Validaciones
lettersCount();
lettersCount(2);
lettersCount("Edad 9 años");
lettersCount("% descuento");