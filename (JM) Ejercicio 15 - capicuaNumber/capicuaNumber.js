// 15) Programar una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), ej:. miFuncion(2002) devolverá true.

const capicuaNumber = (n) => {
    if (typeof n === "number") {
        n = n.toString();
        let compare = n.split("").reverse().join("");
        (n === compare)
            ? console.log(`El número "${n}" es capicúa`)
            : console.log(`El número "${n}" no es capicúa`)
    }
    else {
        console.error(`Ingrese un número válido`);
    }
}

capicuaNumber(2002);
capicuaNumber(23658);

