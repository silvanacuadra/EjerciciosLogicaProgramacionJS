// 6) Programar una función que cuente el número de caracteres de una cadena de texto, ej:. miFuncion("Hola Mundo") devolverá 10.

const totalCharacters = (string) => {
    if (string === "") {
        console.error(`La cadena de caracteres está vacía`);
    }
    else {
        if (typeof string !== "string") {
            console.error(`El caracter ingresado: ${string} no es un string`);
        }
        else {
            let total = string.length;
            console.log(`La cadena "${string}" tiene: ${total} caracteres`);
        }
    }
}

totalCharacters("Hola Mundo");
totalCharacters("Te quiero mucho!");
totalCharacters(5); // Error
totalCharacters(""); // Error