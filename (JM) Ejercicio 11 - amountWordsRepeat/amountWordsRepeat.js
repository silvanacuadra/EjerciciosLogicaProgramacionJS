// 11) Programar una función para contar el número de veces que se repite una palabra en un texto largo, ej:. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const amountWordsRepeat = (text, word) => {
    // Validaciones
    if (!text || !word) {
        return console.warn(`No se han ingresado los parámetros correspodientes`)
    }
    if (typeof text !== "string") {
        return console.error(`El texto ingresado "${texto}" no es válido`)
    }
    if (typeof word !== "string") {
        return console.error(`La palabra ingresada "${palabra}" no es un valor válido`)
    }

    // Ejecución de los Solicitado
    let result = [];
    let array = text.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === word.toLowerCase()) {
            result.push(i);
        }
    }
    console.log(`La palabra ${word} se repite ${result.length} veces`);
}

amountWordsRepeat("hola Mundo adios mundo", "mundo");