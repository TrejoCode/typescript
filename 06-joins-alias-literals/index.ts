/**
 * @description Uniones de tipo, alias de tipos y literales
*/


// Union Types

let idUser: number | string;

idUser = 1;
idUser = "1";

const getUserById = (id: number | string): number | string => {

    console.log(id);
    return id;

};

getUserById("1");


// Alias de tipos

type allowedId = number | string;

const id: allowedId = 10;

console.log(id);