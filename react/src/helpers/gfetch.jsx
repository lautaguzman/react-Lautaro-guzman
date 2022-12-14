

const prendas = [
    {
        id: 1,
        name: 'Argentina',
        descripcion: `Camiseta Titular de Argentina`,
        categoria: 'camiseta',
        precio: 20000,
        img: '/public/Imagenes/Argentina/argentina titular.jpg',

    },
    {
        id: 2,
        name: `Alemania`,
        categoria: 'camiseta',
        descripcion: `Camiseta Titular de Alemania`,
        precio: 15000,
        img: "/public/Imagenes/Alemania/alemania titular.jpg",

    },
    {
        id: 3,
        name: "Brasil",
        categoria: 'camiseta',
        descripcion: `Camiseta Titular de Brasil`,
        precio: 20000,
        img: "/public/imagenes/Brasil/brasil titular.jpg",

    },
    {
        id: 4,
        name: "Marruecos",
        categoria: 'camiseta',
        descripcion: `Camiseta Titular de Marruecos`,
        precio: 8000,
        img: "/public/imagenes/Marruecos/marruecos titular.jpg",

    },
    {
        id: 5,
        name: "Argentina",
        categoria: 'pantalon',
        descripcion: `Pantalon Titular de Argentina`,
        precio: 4000,
        img: "/public/cortos/pantalon de argentina (blanco).jpg",

    }, {
        id: 6,
        name: "Alemania",
        categoria: 'pantalon',
        descripcion: `Pantalon Titular de alemania`,
        precio: 8000,
        img: "/public/cortos/pantalon de alemania.jpg",

    }, {
        id: 7,
        name: "Brasil",
        categoria: 'pantalon',
        descripcion: `Pantalon Titular de Brasil`,
        precio: 8000,
        img: "/public/cortos/pantalon de brasil.jpg",

    }, {
        id: 8,
        name: "Marruecos",
        categoria: 'pantalon',
        descripcion: `Pantalon Titular de Marruecos`,
        precio: 8000,
        img: "/public/cortos/pantalon corto de marruecos.jpg",

    },
]

const gFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prendas);
        }, 2000);
    });
};




export default gFetch

