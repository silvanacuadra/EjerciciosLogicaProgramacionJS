// 33) Programar una función que mueva la primera letra de cada palabra al final de ella y agregue la expresión "ay" al final de la palabra. Ej.: simplePigLatin('Pig latin is cool') retorna igPay atinlay siay oolcay

const simplePigLatin = (text) => {

    // VALIDACIONES

    if (!text) return console.warn("Ingrese un valor");

    if (typeof text !== "string") return console.error("El valor ingresado no es un string");

    let newArray = text.split(" ");
  
    for (let word of newArray) {
        if (!(/^[a-záéíóú]+$/ig.test(word))) return console.error("Sólo se permiten caracteres alfabéticos");
    }

    // EJECUCIÓN DE LO SOLICITADO

    return console.log(newArray.map(word => `${word.slice(1)}${word.charAt(0)}ay`).join(" "));
}

simplePigLatin();
simplePigLatin(true);
simplePigLatin("Mi hijo tiene 6 años");
simplePigLatin("Mi hijo se llama Andrés");

// EJEMPLO
simplePigLatin('Pig latin is cool')