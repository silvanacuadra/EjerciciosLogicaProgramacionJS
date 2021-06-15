 // Ejercicio 4 - Crear una función llamada sum() que reciba un numero como parámetro y que devuelve la sumatoria de todos sus número anteriores, incluso el mismo. Ej.: sum(3) debe retornar 6 (porque hace 1+2+3) y sum(8) debe retornar 36

 const sum = (number) => {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
}

console.log(sum(3)); // Retorna 6
console.log(sum(8)); // Retorna 36
console.log(sum(10)); // Retorna 55