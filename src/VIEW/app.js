//import { suma } from "../repositorio/proyecto.js";
//const { suma } = require("../repositorio/proyecto.js");

const pkg = require("../repositorio/proyecto.js");
const suma = pkg.suma;
const multi = pkg.multiplicacion;
let resultado = suma(15 , 25);

console.log(resultado);

let num1 = 90; 
let num2 = 2;
let multiplo = multi (num1 , num2)
console.log(multiplo)
