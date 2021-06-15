// 27) Programar una función que dado un array devuelva el número mas alto y el más bajo de dicho array, ej.: miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numMax_Min = (arreglo = []) => {

    if (arreglo.length === 0) return console.warn(`El arreglo no puede estar vacio`);

    if (!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}" NO es un arreglo`);

    if (arreglo.some(e => typeof e !== "number")) return console.error(`El arreglo solo puede contener números`);

    /*
    EXPLICACIÓN DE LA RESOLUCIÓN:
    El método sort() permite ordenar los elementos de un arreglo. Sin embargo, esto sólo sirve para cadenas de texto. En el caso de número es necesario utilizar una función de comparación que permita ordenarlos. 
    Los elementos se ordenarán de acuerdo al valor que retorne la función de comparación, ya que el método puede ordenar valores negativos, cero y positivos en el orden correcto. Al comparar dos valores (a) y (b) los envía a la función de comparación y los ordena según el resultado devuelto. 
    Entonces:
        - Si el resultado es negativo, (a) se ordena antes que (b).
        - Si el resultado es positivo, (b) se ordena antes de (a).
        - Si el resultado es 0, nada cambia.
    Si se quiere ordenar los números en orden descendente, en este caso, será necesario restar el segundo parámetro (b) del primero (a):
    */

    arreglo.sort((a, b) => a - b);

    let nuevoArreglo = [];

    nuevoArreglo.push(arreglo[0], arreglo[arreglo.length - 1]);

    return console.info(nuevoArreglo);


    // ALTERNATIVA PARA RESOLVER EL MISMO EJERCICIO: utilizndo las funciones del elemento Math y el operador spread. 
    
    // console.info(`Número Máximo = ${Math.max(...arreglo)} - Número Mínimo: ${Math.min(...arreglo)}`)
}

numMax_Min([1, 4, 5, 99, -60]);
numMax_Min([-2, -65, 85, 4, 32, 87, -102, 8, 4, -6, 136, 1]);