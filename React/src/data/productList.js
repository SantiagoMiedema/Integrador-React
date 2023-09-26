export const productList = [
    {
        id: 1,
        name: `Buzo oversize`,
        category: `Camperas/Buzos`,
        price:`$6000`,
        src: `./img/ropa/buzo-oversize.webp`
    },
    {
        id: 2,
        name: `Blusa Ingrid`,
        category: `Blusas/Tops`,
        price:`$4000`,
        src: `./img/ropa/blusa-ingrid.jpg`
    },
    {
        id: 3,
        name: `Calza Confy`,
        category: `Pantalones`,
        price:`$5500`,
        src: `./img/ropa/calza-confy.jpg`
    },
    {
        id: 4,
        name: `Mini cuerina`,
        category: `Shorts/Minis`,
        price:`$6500`,
        src: `./img/ropa/mini-cuerina.jpg`
    },
    {
        id: 5,
        name: `Campera de cuero`,
        category: `Camperas/Buzos`,
        price:`$11000`,
        src: `./img/ropa/campera-cuero.jpg`
    },
    {
        id: 6,
        name: `Blusa Orchid`,
        category: `Blusas/Tops`,
        price:`$4500`,
        src: `./img/ropa/blusa-orchid.jpg`
    },
    {
        id: 7,
        name: `Jean elastizado`,
        category: `Pantalones`,
        price:`$7000`,
        src: `./img/ropa/jean-elastizado.jpg`
    },
    {
        id: 8,
        name: `Pollera engomada`,
        category: `Shorts/Minis`,
        price:`$7000`,
        src: `./img/ropa/pollera-larga-engomada.jpg`
    },
    {
        id: 9,
        name: `Buzo Florinda`,
        category: `Camperas/Buzos`,
        price:`$5500`,
        src: `./img/ropa/buzo-florinda.jpg`
    },
    {
        id: 10,
        name: `Maxi blusa`,
        category: `Blusas/Tops`,
        price:`$4000`,
        src: `./img/ropa/maxiblusa.jpg`
    },
    {
        id: 11,
        name: `Pantalon engomado`,
        category: `Pantalones`,
        price:`$8500`,
        src: `./img/ropa/pantalon-engomado.jpg`
    },
    {
        id: 12,
        name: `Pollera Treicy`,
        category: `Shorts/Minis`,
        price:`$6500`,
        src: `./img/ropa/pollera-treicy.jpg`
    },
    {
        id: 13,
        name: `Campera de jean`,
        category: `Camperas/Buzos`,
        price:`$8000`,
        src: `./img/ropa/campera-jean.jpg`
    },
    {
        id: 14,
        name: `Top engomado`,
        category: `Blusas/Tops`,
        price:`$4500`,
        src: `./img/ropa/top-engomado.jpg`
    },
    {
        id: 15,
        name: `Calza Lux`,
        category: `Pantalones`,
        price:`$6000`,
        src: `./img/ropa/calza-lux.jpg`
    },
    {
        id: 16,
        name: `Short metalizado`,
        category: `Shorts/Minis`,
        price:`$5500`,
        src: `./img/ropa/short-metalizado.jpg`
    },
    {
        id: 17,
        name: `Maxi buzo`,
        category: `Camperas/Buzos`,
        price:`$8000`,
        src: `./img/ropa/maxibuzo.jpg`
    },
    {
        id: 18,
        name: `Top hope`,
        category: `Blusas/Tops`,
        price:`$3500`,
        src: `./img/ropa/top-hope.jpg`
    },
    {
        id: 19,
        name: `Babucha cargo`,
        category: `Pantalones`,
        price:`$6500`,
        src: `./img/ropa/babucha-cargo.jpg`
    },
    {
        id: 20,
        name: `Short sastrero`,
        category: `Shorts/Minis`,
        price:`$3500`,
        src: `./img/ropa/short-sastrero.jpg`
    },
    {
        id: 21,
        name: `Campera Mom`,
        category: `Camperas/Buzos`,
        price:`$8000`,
        src: `./img/ropa/campera-mom.jpg`
    },
    {
        id: 22,
        name: `Top jean`,
        category: `Blusas/Tops`,
        price:`$4000`,
        src: `./img/ropa/top-jean.jpg`
    },
    {
        id: 23,
        name: `Calza personalizada`,
        category: `Pantalones`,
        price:`$6500`,
        src: `./img/ropa/calza-personalizada.jpg`
    },
    {
        id: 24,
        name: `Short tiro alto`,
        category: `Shorts/Minis`,
        price:`$3500`,
        src: `./img/ropa/short-tiro-alto.jpg`
    },

];

export const TotalProducts = productList.length;

export const ProductList = productList.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category] = [...acc[product.category], product];
  
    return acc;
  }, {});