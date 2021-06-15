// 30) Programar una función que dado un arreglo de elementos, elimine los duplicados, ej:. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const removeDuplicate = (arreglo = []) => {

    if (arreglo.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    if (!(Array.isArray(arreglo))) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    const result = arreglo.filter((e, i, a) => a.indexOf(e) === i)

    return console.info(result);
}

removeDuplicate(["x", 10, "x", 2, "10", 10, true, true]);