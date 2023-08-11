//const bebes = require('./03_importExport')
//console.log(bebes);

// Importar usando modulos
import bebes, {bebesDurmiendo, otrosBebes, fn1, fn2} from './03_importExport.mjs'
console.log(bebes)
console.log(bebesDurmiendo)
console.log(otrosBebes)
fn1()
fn2()

// La extensión .mjs solo es cuando trabajamos sin
// un archivo package.json
// Si hacemos un proyecto que haga uso de
// package.json no es necesario cambiar la extensión