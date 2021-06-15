// 9) Programar una función que repita un texto X veces, ej:. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatText = (string, n = 1) => {
    if (!string) {
        console.error(`Cadena de texto vacia`);
    }
    else if (typeof string !== "string") {
        console.error(`el valor ingresado: ${string} no es una cadena de caracteres válida`);
    }
    else {
        if (typeof n !== "number" || n <= 0) {
            return console.error(`El número ingresado: ${n} no es un número válido`);
        }
        else {
            let texto = string.repeat(n);
            console.log(texto);
        }
    }
}

repeatText("Hola", 3);
repeatText("Hola", -2); // Error
repeatText(5, "Hola"); // Error