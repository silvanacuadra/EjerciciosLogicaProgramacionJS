// 16) Programar una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), ej:. miFuncion(5) devolverá 120.

const factorial = (n) => {
    let result = 1;
    if (typeof n === "number" && n > 0) {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        console.log(`El factorial de ${n} es ${result}`);
    }
    else {
        console.error(`Ingrese un número válido`);
    }
}

factorial(5);
factorial(7);

// Probando validaciones
factorial();
factorial(-3);
factorial("4")