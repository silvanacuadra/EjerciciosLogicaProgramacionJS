 // 18) Programar una función que determine si un número es par o impar, ej:. miFuncion(29) devolverá Impar.

 const parImpar = (num) => {

    if (!num) return console.warn(`Ingrese un valor válido`);

    if (typeof num !== "number") return console.error(`El valor ingresado no es un número`);

    return (num % 2 === 0)
        ? console.log(`El número "${num}" es par`)
        : console.log(`El número "${num}" es impar`)
}

parImpar(7);
parImpar(22);