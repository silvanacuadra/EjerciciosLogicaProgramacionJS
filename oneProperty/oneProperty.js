// Ejercicio 3 - Crear una función llamanda oneProperty() que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. Ej.: let oneProperty = [{name:"Juan", edad:20}, {name:"Ana", edad:23}] unaPropiedad(arreglo,"edad") debe retornar [{edad:20}, {edad:23}]

const oneProperty = (arrayObj, string) => {
    let newArray = [];
    for (i = 0; i < arrayObj.length; i++) {
        newArray.push({ [string]: arrayObj[i][string] })
    }
    return newArray;
}

let arreglo = [{ nombre: "Juan", edad: 20 }, { nombre: "Ana", edad: 23 }, { nombre: "Lucas", edad: 25 }]

console.log(oneProperty(arreglo, "nombre"));
console.log(oneProperty(arreglo, "edad"));


// Otra opcion es como la función map() del prototipo Array.

const oneProperty2 = (arrayObj, string) => {
    return arrayObj.map(obj => ({ [string]: obj[string] }))
}
let arreglo2 = [{ nombre: "Maria", apellido: "Gomez" }, { nombre: "Pablo", apellido: "Garcia" }, { nombre: "Carlos", apellido: "Sosa" }]

console.log(oneProperty2(arreglo2, "apellido"));

