// 21) Programar una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, ej:. miFuncion(1000, 20) devolverá 800.

const totalAmount = (price = undefined, discount = 0) => {
    if (price === undefined) return console.warn(`Ingrese un valor para el parámetro precio`);

    if (typeof price !== "number") return console.error(`El valor ingresado "${price}" NO es un número`);

    if (price <= 0) return console.error(`Valor de monto inválido`)

    if (discount < 0 || typeof discount !== "number") return console.error(`Ingrese un valor válido, que debe ser un número positivo`);

    let total = price - (price * (discount / 100));

    console.log(`El monto $${price} con el ${discount}% de descuento es = $${total.toFixed(2)}`);
}

totalAmount(100, 20);
totalAmount(6500, 30);
totalAmount(12.50, 10);

// Probando Validaciones
totalAmount();
totalAmount("Hola", 3);
totalAmount(5);
totalAmount(100, -5);
totalAmount(100, "Chau");
totalAmount(100, 0);