/**
 * @description Creación de la configuración de typescript
*/
// Explícito
var phone;
phone = 1;
// Implícito
var numberImp = 10;
// Hexadecimales
var hexa = 0xf00d;
// Binarios
var binary = 10;
// Octales
var octal = 484;
// Boolean
var bool = true;
// String
var chain = "Hola mundo";
// Template string
var template = chain + " - " + phone;
// Any
var variable;
variable = "Mi Variables";
variable = true;
// Void
function showInformation(user) {
    console.log('Usuario: ', user.id, user.name);
}
showInformation({ id: 1, name: 'Sergio' });
// Never
function handleError(code, message) {
    // All handling error rules
    throw new Error(code + ": " + message);
}
handleError(404, 'Not found');
