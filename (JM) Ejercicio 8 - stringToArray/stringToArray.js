// 8) Programar una función que dado una String devuelva un Array de textos separados por cierto caracter, ej:. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (string, caracter = "") => {
    (string === "")
        ? console.error(`La cadena de caracteres está vacía`)
        : (typeof string !== "string")
            ? console.error(`el valor ingresado: ${string} no es una cadena de caracteres válida`)
            : console.log(string.split(caracter))
}

stringToArray("Hola que tal", " "); // Arreglo de 3 elementos
stringToArray("1,2,3,4,5", ",");  // Arreglo de 5 elementos
stringToArray("amigos");  // Arreglo de 6 elementos