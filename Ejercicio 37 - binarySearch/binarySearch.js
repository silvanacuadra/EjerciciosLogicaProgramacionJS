// 37) Programar una función que dado un número y un array ordenado determine si el número se encuentra entre la mitad mayor o menor. 

const binarySearch = (arr, num) => {

    // VALIDACIONES

    if (!num || !arr) return console.warn("Introduza el valor/valores faltante");

    if (typeof num !== "number") return console.error(`El valor ingresado ${num} NO ES VÁLIDO`);

    if (!(arr instanceof Array)) return console.error(`El valor ingresado ${arr} NO ES UN ARRAY VÁLIDO`);

    if (arr.length === 0) return console.error(`El array no puede estar vacío`);

    if (arr.some(e => typeof e !== "number")) return console.error(`El array contiene un valor o valores NO NUMÉRICOS`);

    let middle = Math.floor(arr.length/2)

    if(num == arr[middle]) {
        console.info(`${num} está en la mitad del array`);
    } else if (num < arr[middle]) {
        console.info(`${num} está en la mitad menor`);
    } else {
        console.info(`${num} está en la mitad mayor`);
    }
}

const arreglo = [1, 2, 3, 5, 7, 12, 34, 123, 150];

binarySearch(arreglo, 123);
binarySearch(arreglo, 7);
binarySearch(arreglo, 3)
;
// VALIDACIONES
/*
binarySearch();
binarySearch(5);
binarySearch("Hola", [1, 8, 2]);
binarySearch(2, true);
binarySearch(5, []);
binarySearch(5, [1, 2, 3, "A"]);
*/