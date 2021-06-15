// 20) Programar una función para convertir números de base binaria a decimal y viceversa, ej:. miFuncion(100,2) devolverá 4 base 10.

const converter = (num = undefined, base = undefined) => {
    if (num === undefined) return console.warn(`No ingresaste un número`);

    if (typeof num !== "number") return console.error(`El valor ingresado "${num}" NO es un número`);

    if (base === undefined) return console.warn(`No ingresaste la base a convertir`);

    if (typeof base !== "number" || !(/^2|10$/.test(base))) return console.error(`Valor inválido, debe ingresar 2 o 10`);

    let result;

    if (base === 2) {
        result = parseInt(num, base);
        console.log(`El número ${num} es igual a ${result} en base 10`);
    } else {
        result = num.toString(2);
        console.log(`El número ${num} es igual a ${result} en base 2`);
    }

    /*
    EXPLICACION DEL EJERCICIO:

        PARSEINT(): El método parseInt() sirve para pasar a decimal un número especificado en otra base. El primer argumento indica el número y el segundo la base del mismo.

        TOSTRING(): El método toString() permite convertir un número decimal a la base especificada cuando se indica por parámetro.
    */
}

// De Binario a Decimal
converter(100, 2);
converter(110101, 2);

// De Decimal a Binario
converter(6, 10); // 110
converter(15, 10);  // 1111


// Probando Validaciones
converter();
converter("2");
converter(4);
converter(3, "h")
converter(3, 45)
