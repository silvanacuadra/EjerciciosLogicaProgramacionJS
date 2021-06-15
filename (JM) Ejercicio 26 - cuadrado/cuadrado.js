// 26) Programar una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, ej.: mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const numeroAlCuadrado = (arreglo = []) => {

    if (arreglo.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    if (!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    if(arreglo.some( e => typeof e !== "number")) return console.error(`El arreglo solo puede contener números`);

    const nuevoArreglo = arreglo.map(e => Math.pow(e, 2))

    return console.info(nuevoArreglo);
}

numeroAlCuadrado([1, 4, 5]);
numeroAlCuadrado([2, 3, 6]);

// Probando Validaciones
numeroAlCuadrado();
numeroAlCuadrado("string")
numeroAlCuadrado({ nombre: "Luis", apellido: "Lopez" });
numeroAlCuadrado([1, 2, "tres", 4]);