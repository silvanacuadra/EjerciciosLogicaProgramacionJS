class Pelicula {
    constructor({ id, titulo, director, estreno, pais, genero, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarIMBD(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.validarCalificacion(calificacion);
    }

    // ATRIBUTO Y MÉTODO ESTÁTICO

    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    // MÉTODOS GENERALES (se utilizan en varias de las validaciones)

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad}: "${valor}" está vacío`);

        if (typeof valor !== "string") return console.error(`${propiedad}: "${valor}" ingresado, NO es una cadena de texto`);

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`La propiedad ${propiedad} excede el número de caracteres permitidos (${longitud})`);

        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad}: "${valor}" está vacío`);

        if (typeof valor !== "number") return console.error(`${propiedad}: "${valor}" ingresado, NO es un número`);

        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad}: "${valor}" está vacío`);

        if (!(valor instanceof Array)) return console.error(`${propiedad}: "${valor}" ingresado, NO es un arreglo`);

        if (valor.length === 0) return console.error(`El arreglo "${propiedad}" NO puede esta vacío, ingrese al menos 1 país`)

        for (let elemento of valor) {
            if (typeof elemento !== "string") return console.error(`El valor "${elemento}" dentro del arreglo "${valor}" NO es una cadena de texto`)
        }

        return true;
    }

    // MÉTODOS ESPECÍFICOS (permiten válidar cada uno de los valores que se ingresan)

    validarIMBD(id) {
        if (this.validarCadena("IMDB ID", id)) {
            if (!(/^[a-z]{2}[0-9]{7}$/.test(id))) return console.error(`El IMBD ID "${id}" no es válido. Debe tener 9 caracteres, los dos primeros letras minúsculas y los 7 restantes números`)
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Título", titulo)) {
            this.validarLongitudCadena("Título", titulo, 100);
        }
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de Estreno", estreno)) {
            if (!(/^[0-9]{4}$/.test(estreno))) return console.error(`El Año de Estreno "${estreno}" NO es válido. Debe ingresar un número de 4 dígitos`);
        }
    }

    validarPais(pais) {
        this.validarArreglo("Pais/Paises de Origen", pais);
    }

    validarGenero(genero) {
        if (this.validarArreglo("Género/Géneros", genero)) {
            for (let uno of genero) {
                if (!(Pelicula.listaGeneros.includes(uno))) return console.error(`El género ${uno} no es un valor aceptado`);
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion)) {
            return (calificacion < 0 || calificacion > 11)
                ? console.error(`El valor ingresado ${calificacion} para la calificación NO es válido. Introduzca un número del 0 al 10.`)
                : this.calificacion = calificacion.toFixed(1)
        }
    }

    fichaTecnica() {
        console.info(`Ficha Técnica\nTítulo: "${this.titulo}"\nDirector: ${this.director}\nPaís/Países: ${this.pais.join(" - ")}\nGénero/s: ${this.genero.join(", ")}\nCalificación: ${this.calificacion}\nIMBD ID: ${this.id}`)
    }
}

const pelicula = new Pelicula({
    id: "tt0241527",
    titulo: "Harry Potter y la Piedra Filosofal",
    director: "Chris Columbus",
    estreno: 2001,
    pais: ["UK", "USA"],
    genero: ["Adventure", "Fantasy"],
    calificacion: 7.60,
});

pelicula.fichaTecnica();

const pelisFavoritas = [
    {
        id: "tt0414387",
        titulo: "Pride & Prejudice",
        director: "Joe Wright",
        estreno: 2005,
        pais: ["France", "UK", "USA"],
        genero: ["Drama", "Romance"],
        calificacion: 7.8
    },
    {
        id: "tt0088763",
        titulo: "Back to the Future",
        director: "Robert Zemeckis",
        estreno: 1985,
        pais: ["USA"],
        genero: ["Adventure", "Comedy", "Sci-Fi"],
        calificacion: 8.5
    },
    {
        id: "tt0458352",
        titulo: "The Devil Wears Prada",
        director: "David Frankel",
        estreno: 2006,
        pais: ["USA", "France"],
        genero: ["Comedy", "Drama"],
        calificacion: 6.9
    }
];

pelisFavoritas.forEach(e => new Pelicula(e).fichaTecnica());