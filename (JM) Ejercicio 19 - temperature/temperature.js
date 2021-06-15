// 19) Programar una función para convertir grados Celsius a Fahrenheit y viceversa, ej:. miFuncion(0,"C") devolverá 32°F.

const temperature = (temp = undefined, unit = undefined) => {
    if (temp === undefined || unit === undefined) return console.warn(`Ingrese el valor que falta`);

    if (typeof temp !== "number") return console.error(`El valor "${temp}" ingresado no es un número`);

    if (typeof unit !== "string" || !(unit.match(new RegExp("^(C|F)$", "i")))) return console.error(`Debe ingresar un valor válido para la unidad, C o F`);

    let result;

    if (unit === "f" || unit === "F") {
        result = (temp - 32) * (5 / 9);
        console.log(`${temp}ºF = ${result.toFixed()}ºC`)
    } else {
        result = (temp * (9 / 5)) + 32;
        console.log(`${temp}ºC =  ${result.toFixed()}ºF`)
    }
}

temperature(0, "C");
temperature(32, "F");
temperature(25, "c");
temperature(72, "f");

// Probando Validaciones
temperature();
temperature("Hola");
temperature("Hola", "Chau");
temperature(80, 6);
temperature(80, "G");
temperature(80, "fc");
