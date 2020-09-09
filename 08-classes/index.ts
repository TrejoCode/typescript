/**
 * @description POO Class
*/

class Picture {
    // Propiedades
    public id: number;
    public title: string;
    public valid: boolean;

    public constructor(id: number, title: string, valid: boolean){
        this.id = id;
        this.title = title;
        this.valid = valid;
    }

    // Métodos
    public toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 valid: ${this.valid}    
                ]`;
    }

}

class Album {
    // Propiedades
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    // Métodos
    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }

}

const album: Album = new Album(1, "Vacaciones");
const picture: Picture = new Picture(1, "Foto01", true);
album.addPicture(picture);

console.log(album);