// Programar una función que retorne la suma de los 4 números más grandes de un array, si el array tiene 4 números o menos, retorna la suma de todos.

const larguestFour = (arr) => {

    // VALIDACIONES

    if (!arr) return console.warn("Ingrese un valor válido");

    if (!(arr instanceof Array)) return console.error(`El valor ingresado "${arr}" NO es un arreglo`);

    if (arr.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    for (let element of arr) {
        if (typeof element !== "number") return console.error(`El elemento "${element}" NO es un número`);
    }

    // RESOLUCIÓN
    
    let total = 0;

    if (arr.length <= 4) {
        for (let n of arr) {
            total += n;
        }
    } else {
        let lastFour = arr.sort((a, b) => b - a).splice(0, 4)
        for (let n of lastFour) {
            total += n;
        }
    }

    return console.log(total);
}

larguestFour([2, 5, 8]);
larguestFour([9, 5, 2, 8, 12, 1, 6]);

// VALIDACIONES
larguestFour();
larguestFour(5);
larguestFour([]);
larguestFour([5, 2, 3, true]);
