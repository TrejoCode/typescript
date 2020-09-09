/**
 * @description Interfaces
*/

enum Orientations {
    LANDSCAPE,
    PORTRAIT,
    SQUARE,
    PANORAMA
};

interface Picture {
    title: string;
    date?: string;
    orientation: Orientations;
};

interface User {
  name: string;
  readonly isPro: boolean;
};

function showPicture(picture: Picture): void {

    console.info(`Título: ${picture.title}, Fecha: ${picture.date}, Orientación: ${picture.orientation}`);

}

const data = {
    title: "Foto01.jpg",
    date: "15-09-2020",
    orientation: Orientations.PORTRAIT
};

showPicture(data);

let usuario: User;
usuario = { name: "Sergio", isPro: true };
console.log(usuario);
//usuario.isPro = false;