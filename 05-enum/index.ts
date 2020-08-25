/**
 * @description Enumeradores
*/

// Valores de orientación de fotografía

enum Orientations {
    LANDSCAPE,
    PORTRAIT,
    SQUARE,
    PANORAMA
};

const landscape: Orientations = Orientations.PORTRAIT;

// Index
console.log(landscape);

// Valor
console.log(Orientations[2]);


enum Countries {
    MEXICO = 'MX',
    COLOMBIA = 'COL',
    ARGENTINA = 'AR',
};

const mexico: Countries = Countries.MEXICO;

console.log(mexico);