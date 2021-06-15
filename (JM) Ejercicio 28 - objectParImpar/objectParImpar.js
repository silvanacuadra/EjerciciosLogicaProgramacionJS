// 28) Programar una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, ej.: miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objetParImpar = (arreglo = []) => {
    if (arreglo.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    if (!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    if (arreglo.some(e => typeof e !== "number")) return console.error(`El arreglo solo puede contener números`);

    let arregloPar = [],
        arregloImpar = [],
        resultado = {};

    arreglo.forEach(e => {
        (e % 2 === 0)
            ? arregloPar.push(e)
            : arregloImpar.push(e)
    })

    resultado.pares = arregloPar;
    resultado.impares = arregloImpar;

    return console.info(resultado);

    // ALTERNATIVA CON EL MÉTODO FILTER() DE LOS ARRAY
    
    /*
    return console.info({
        pares: arreglo.filter( e => e % 2 === 0),
        impares: arreglo.filter( e => e % 2 === 1)
    })
    */
}

objetParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9]);
objetParImpar([25, 33, 14, 98, 87, 45, 23, 100]);
