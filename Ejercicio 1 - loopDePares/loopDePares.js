// Ejercicio 1 - Crear una función llamada loopDePares() que reciba como parámetro un número y haga un loop de 0 a 100. En caso de que el número de la iteranción sumado con el número pasado por parámetro sea par, mostrár por consola "el número x es par"

const loopDePares = (n) => {
    for (let i = 0; i <= 100; i++) {
        let numero = i + n;
        if (numero % 2 === 0) {
            console.log(`El número ${numero} es par`);
        }
        else {
            continue;
        }
    }
}

loopDePares(10);
