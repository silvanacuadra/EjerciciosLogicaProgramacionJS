// 13) Programar una función que elimine cierto patrón de caracteres de un texto dado, ej:. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const deletePattern = (text, pattern) => {
    // Validaciones
    if (!text || !pattern) {
        return console.warn(`No se han ingresado los parámetros correspodientes`)
    }
    if (typeof text !== "string") {
        return console.error(`El texto ingresado "${text}" no es válido`)
    }
    if (typeof pattern !== "string") {
        return console.error(`La palabra ingresada "${pattern}" no es un valor válido`)
    }

    // Ejecución de los Solicitado
    let result = text.replace(new RegExp(pattern, "ig"), "");
    console.log(`El nuevo patrón es "${result}"`);
}

deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

deletePattern("Se llama texto breve a todo aquel texto que ocupa pocas palabras para explicar una idea completamente. Inicia el tema lo desarrolla y lo concluye utilizando apenas 4, 5 o 6 líneas. Para desarrollar un texto breve, es necesario conocer bien las palabras y lograr escribir conceptos completos en breves palabras.", "a");