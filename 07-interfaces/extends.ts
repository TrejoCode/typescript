/**
 * @description Extender interfaces
*/

export {};

enum Orientations {
    LANDSCAPE,
    PORTRAIT,
    SQUARE,
    PANORAMA
};

interface Entity {
    id: number;
    title: string;
}


interface Album extends Entity {
    description: string;
};

interface Picture extends Entity {
    orientation: Orientations;
}

const album: Album = {
    id: 1,
    title: "Recuerdos",
    description: "Fotos del recuerdo 2020"
};

console.log(album);


let photo = {} as Picture;
photo.id = 1;
photo.title = "Foto01";
photo.orientation = Orientations.PORTRAIT;

console.log(photo);
