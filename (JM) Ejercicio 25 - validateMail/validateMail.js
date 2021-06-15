
const validateMail = (email) => {
    if (email === undefined) return console.warn(`No ingresaste una cadena de texto`);

    if (typeof email !== "string") return console.error(`El valor ingresado "${email}" NO es una cadena de texto válida`)

    const expresion = /^[\w._-]+@[a-z]+\.[a-z]{2,4}(.ar)*$/g;

    (expresion.test(email))
        ? console.log(`El email ingresado "${email}" es VÁLIDO`)
        : console.error(`El email ingresado "${email}" NO ES VÁLIDO. Por favor, introdúzcalo nuevamente.`);
}

validateMail("jonmircha@gmail.com"); // VÁLIDO
validateMail("LuLa_BC@yahoo.com.ar"); // VÁLIDO
validateMail("g.gomez@edu-ar.com"); // NO VÁLIDO

// Probando Validaciones 
validateMail();
validateMail(562);