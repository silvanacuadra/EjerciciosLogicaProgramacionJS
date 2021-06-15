// Ejercicio 2 - Crear una función llamada newArray() que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le haya pasado, empezando por el número 1. Ej.: newArray(5) debe retornar [1,2,3,4,5] y newArray(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

const newArray = (cantidadElem) => {
    let arreglo = [];
    for (let i = 1; i <= cantidadElem; i++) {
        arreglo.push(i);
    }
    return arreglo;
}

console.log(newArray(5));
console.log(newArray(10));
