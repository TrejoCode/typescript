/**
 * @description Enumeradores
*/
// Valores de orientación de fotografía
var Orientations;
(function (Orientations) {
    Orientations[Orientations["LANDSCAPE"] = 0] = "LANDSCAPE";
    Orientations[Orientations["PORTRAIT"] = 1] = "PORTRAIT";
    Orientations[Orientations["SQUARE"] = 2] = "SQUARE";
    Orientations[Orientations["PANORAMA"] = 3] = "PANORAMA";
})(Orientations || (Orientations = {}));
;
var landscape = Orientations.PORTRAIT;
// Index
console.log(landscape);
// Valor
console.log(Orientations[2]);
var Countries;
(function (Countries) {
    Countries["MEXICO"] = "MX";
    Countries["COLOMBIA"] = "COL";
    Countries["ARGENTINA"] = "AR";
})(Countries || (Countries = {}));
;
var mexico = Countries.MEXICO;
console.log(mexico);
