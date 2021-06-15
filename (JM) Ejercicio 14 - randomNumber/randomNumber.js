//  14) Programar una función que obtenga un número aleatorio entre 501 y 600.

const randomNumber = () => {
    let n;
    do {
        n = Math.round(Math.random() * 1000);
    }
    while (n < 501 || n > 600);
    console.log(n);
}

randomNumber();
randomNumber();