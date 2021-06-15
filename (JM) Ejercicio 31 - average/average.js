 // 31) Programar una función que dado un arreglo de números obtenga el promedio, ej:. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

 const average = (arreglo) => {

    if (arreglo.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    if (!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    for (let elemento of arreglo) {
        if (typeof elemento !== "number") return console.error(`El elemento "${elemento}" NO es un número válido`);
    }

    let total = 0;
    for (let elemento of arreglo) {
        total += elemento;
    }

    return console.info(`El promedio de los valores del arreglo es = ${total / arreglo.length}`)

    // UTILIZANDO EL MÉTODO REDUCE()
    /*
    arreglo.reduce((total, elemento, index, arreglo) => {
        total += elemento;
        if (index === (arreglo.length - 1))
            return console.info(`El promedio es igual a ${total / arreglo.length}`)
        else return total;
    });
    */
}

average([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
average([21, 56, 31, 47, 69]);