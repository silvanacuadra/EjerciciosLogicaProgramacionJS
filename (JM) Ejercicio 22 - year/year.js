// 22) Programar una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, ej:.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020).


const year = (anio = undefined, mes = undefined, dia = undefined) => {

    if (anio === undefined || mes === undefined || dia === undefined) return console.warn(`Ingrese el dato faltante. Debe introducir tres parámetros = año, mes, día`);

    if (typeof anio == ! "number" || !(/[0-9]{4}/.test(anio)) || anio < 0) return console.error(`Valor inválido. Ingrese el año con 4 cifras. `);

    if (typeof mes == ! "number" || !(/[0-9]{1,2}/.test(mes)) || mes < -1 || mes > 12) return console.error(`Valor inválido. Ingrese el mes con 2 cifras. `);

    if (typeof dia == ! "number" || !(/[0-9]{1,2}/.test(dia)) || dia < 0 || dia > 32) return console.error(`Valor inválido. Ingrese el día con 2 cifras. `);

    let fechaIngresada = new Date(anio, (mes - 1), dia);
    let fechaActual = new Date();
    let diferencia = fechaActual.getFullYear() - fechaIngresada.getFullYear();
    let meses = fechaActual.getMonth() - fechaIngresada.getMonth();

    if(meses < 0 || (meses === 0 && fechaActual.getDate < fechaIngresada.getDate)) {
        diferencia--;
    }

    console.log(`Han transcurrido ${diferencia} años`);
}
year(2019, 3, 4); // Debe retornar 2 años
year(1990, 10, 06); // Debe retornar 30 años
year(2018, 5, 31); // Debe retornar 3 años
year(1960, 06, 22); // Debe retornar 3 años


// RESOLUCIÓN DEL EJERCICIO POR JM

const year2 = (fecha = undefined) => {

    if (fecha === undefined) return console.warn(`No ingresaste la fecha`);

    // El operador instanceof se utiliza para confirmar el tipo de un objeto. Verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor. 
    // Sintaxis: objeto instanceof constructor

    if (!(fecha instanceof Date)) return console.error(`El valor que ingresaste NO es una fecha válida`);

    let diferenciaFechas = new Date().getTime() - new Date(fecha).getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(diferenciaFechas / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
        ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.log(`Han pasado ${Math.abs(aniosHumanos)} años desde el ${fecha.getFullYear()}`)
            : console.log(`Estamos en el año actual ${fecha.getFullYear()}`)
}

year2(new Date(2019, 2, 4)); // Debe retornar 2 años
year2(new Date(1990, 9, 06));  // Debe retornar 30 años
year2(new Date(2018, 5, 01)); // Debe retornar 3 años
year2(new Date(1960, 06, 22)); // Debe retornar 3 años

year2(new Date(2035, 0, 20)); // Debe retornar 14 años
year2(new Date(2035, 10, 20)); // Debe retornar 15 años

year2(new Date()); // Año actual