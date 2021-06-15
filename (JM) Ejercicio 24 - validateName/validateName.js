// 24) Programar una función que valide que un texto sea un nombre válido, ej. miFuncion("Jonathan MirCha") devolverá verdadero.

const validateName = (name = undefined) => {

    if (name === undefined) return console.warn(`No ingresaste una cadena de texto`);

    if (typeof name !== "string") return console.error(`El valor ingresado "${name}" NO es una cadena de texto válida`)

    const expresion = /^[A-ZÁÉÍÓÚ]{1}[a-záéíóú]+\s[A-ZÁÉÍÓÚ]{1}[A-Za-záéíóú]+$/g;

    (expresion.test(name)) 
        ? console.log(`El nombre ingresado "${name}" es VÁLIDO`)
        : console.warn(`El nombre ingresado "${name}" NO ES VÁLIDO. Por favor, introdúzcalo nuevamente.`);
}

validateName("Jonathan MirCha");
validateName("Joaquín Gonzalez");

// Probando Validaciones
validateName();
validateName(65);
