// 11) Programar una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), ej:.mifuncion("Salas") devolverá true.

const palindrome = (string) => {
    // Validaciones
    if (!string) {
        return console.warn(`Ingrese un string`)
    }
    if (typeof string !== "string") {
        return console.error(`El texto ingresado "${string}" no es válido`)
    }

    // Ejecución de los Solicitado
    let compare = string.split("").reverse().join("");
    (string.toLowerCase() === compare.toLowerCase())
        ? console.log(`La palabra ingresada "${string}" es un palíndromo`)
        : console.log(`La palabra ingresada "${string}" no es un palíndromo`)
}

palindrome("Salas");
palindrome("Hola");

// Comprobando Validaciones
palindrome();
palindrome(145);