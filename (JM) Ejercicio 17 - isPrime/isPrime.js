// 17) Programar una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, ej:. miFuncion(7) devolverá true.

const isPrime = (num) => {

    if (!num) return console.warn(`Ingrese un valor válido`);

    if (typeof num !== "number") return console.error(`El valor ingresado no es un número`);

    if (num < 0) return console.error(`El número ingresado no puede ser negativo`)

    if (num === 1) return console.error(`El número ingresado no puede ser 1`)

    const prime = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    return (isPrime(num))
        ? console.log(`El número "${num}" SI es primo`)
        : console.log(`El número "${num}" NO es primo`)
}

isPrime(7);
isPrime(6);

// Probando Validaciones
isPrime();
isPrime("2");
isPrime(0);
isPrime(-5);