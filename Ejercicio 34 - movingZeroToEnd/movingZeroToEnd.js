// 34)  Programar una función que tome un array y mueva todos los ceros al final, perseverando el orden de los otros elementos.

const movingZeroToEnd = (arreglo) => {

    // VALIDACIONES 

    if(!arreglo) return console.warn("Ingrese un valor válido");

    if (!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    if (arreglo.length === 0) return console.error(`El arreglo no puede estar vacío`);


    // RESOLUCIÓN
    
    let arregloWithoutZero = arreglo.filter( e => e !== 0),
        arregloZero = arreglo.filter( e => e === 0),
        final = arregloWithoutZero.concat(arregloZero);

    return console.log(final);
}

movingZeroToEnd();
movingZeroToEnd("HOLA");
movingZeroToEnd([]);
movingZeroToEnd([true, 0, "A", 5, false, 0, "h", 2]);

