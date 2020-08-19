/**
 * @description Creación de la configuración de typescript
*/


// Explícito
let phone: number;
phone = 1;

// Implícito
let numberImp = 10;


// Hexadecimales
let hexa: number = 0xf00d;


// Binarios
const binary: number = 0b1010;


// Octales
const octal: number = 0o744;


// Boolean
const bool: boolean = true;


// String
const chain: string = "Hola mundo";


// Template string
const template: string = `${chain} - ${phone}`;


// Any
let variable: any;
variable = "Mi Variables";
variable = true;


// Void
function showInformation(user: any): void {
    console.log('Usuario: ', user.id, user.name);
}

showInformation({ id: 1, name: 'Sergio' });


// Never
function handleError(code: number, message: string): never {
    // All handling error rules
    throw new Error(`${code}: ${message}`);
}

//handleError(404, 'Not found');

// Object

let user = {
    id: 1,
    username: 'trejocode',
    password: '*********',
    isActive: true
};

console.log(user.username);