// 29) Programar una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarAscendenteDescendente = (arreglo = []) => {

    if (arreglo.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    if (!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    for (elemento of arreglo) {
        if (typeof elemento !== "number") return console.error(`El elemento "${elemento}" NO es un número válido`);
    }

    return console.info({
        asc: arreglo.map(e => e).sort((a, b) => a - b),
        desc: arreglo.map(e => e).sort((a, b) => b - a)
    })
}

ordenarAscendenteDescendente([7, 5, 7, 8, 6]);
ordenarAscendenteDescendente([15, 2, 85, 21, 32, 9, 10, 8, 55, 27]);