// Ejercicio 5 - Crear una función llamada middleCharacter() que reciba un "string" por parámetro y devuelva sus caracteres del medio. Ej.: middleCharacter(amigo) debe retornar "i" mientras que middleCharacter("Hola") debe retornar "ol"

const middleCharacter = (string) => {
    let letters = string.split("");
    let result = "";

    if (letters.length % 2 === 0) {
        result = letters[((letters.length / 2) - 1)] + letters[(letters.length / 2)]
    } else {
        result = letters[Math.floor((letters.length / 2))]
    }
    
    return result;
}

console.log(middleCharacter("amigo")); // Retorna "i"
console.log(middleCharacter("hola")); // Retorna "ol"
console.log(middleCharacter("esperanza")); // Retorna "r"
console.log(middleCharacter("habitación")); // Retorna "ta"