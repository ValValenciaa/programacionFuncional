import { curry } from 'ramda';

// Programacion Funcional
// Se trata de un paradigma de programación; un estilo de construir la estructura y elementos de una aplicación. Es “declarativa” es decir, las sentencias declaran QUÉ hacer, delegando en otra función
// Enfocándonos en “qué” estamos haciendo
// Como paradigma declarativo, la programación funcional delega el control de flujo a funciones.

//Inmutabilidad
//Cuando usamos el paradigma funcional queremos siempre evitar modificar el valor de nuestras variables y trabajar con datos inmutables

                //*Datos inmuables: : Un dato u objeto, una vez creado, no puede ser cambiado
// Practicas:

// Reducir / eliminar las asignaciones en la medida de lo posible
// Usar estructuras de datos inmutables: Para esto existen librerías como immutable.js de Facebook y mori.
//Usar las funciones freeze y seal:
// -freeze convierte un objeto en inmutable, de manera que no es posible cambiar las propiedades que tiene definidas, a menos que éstas sean objetos
// -seal impide añadir nuevas propiedades pero permite reasignar el valor de las existentes (ojo si queremos 'congelar' todos lo niveles de propiedades de un objeto podemos usar helpers como deepfreeze).

// Funciones puras

//Aquella cuyo resultado será siempre el mismo para un mismo valor de entrada; sólo depende del argumento recibido. Además no tiene efectos colaterales (no modifica ninguna variable global ni local).

/**
 * Está funcion recibe un parametro de entrada 'n' que no se modifica (no muta), y devuelve siempre el mismo resultado para ese valor de entrada.
 * @param {number} n
 * @returns {number} 
 */
function double(n) {
    return n * 2;
}
console.log('el resultado es ' + double(2));

//Impura

/**
 * Añada a un array la suma de sus elementos
 * @param {Array} entryArray
 * @returns {Array}
 */
function appendSumOfValues(entryArray) {
    const total = entryArray.reduce((accummulator, currentValue) => accummulator + currentValue);
    entryArray.push(total);
   
    return entryArray;
}

const original = [3, 2]
console.log(appendSumOfValues(original));
console.log(appendSumOfValues(original));
console.log(appendSumOfValues(original));

//(3) [3, 2, 5]
//(4) [3, 2, 5, 10]
//(5) [3, 2, 5, 10, 20]

/**
 * Concat es un método que no muta el parametro de entrada, siempre devuelve un nuevo array
 * @param {Array} entryArray
 * @returns {Array}
 */
function appendSumOfValuesPura(entryArray) {
    const total = entryArray.reduce((accummulator, currentValue) => accummulator + currentValue);
    const result = entryArray.concat(total);
   
    return result;
 }

 const originalPura = [3, 2];
 console.log('Funcion pura:');
 console.log(appendSumOfValuesPura(originalPura));
 console.log(appendSumOfValuesPura(originalPura));
 console.log(appendSumOfValuesPura(originalPura));

// Funciones de orden superior
// Son aquellas que reciben una o más funciones como argumento o bien devuelven funciones como resultado

let mapResult = [1, 2, 3].map(n => n+1); 
console.log("Map:");
console.log(mapResult);

let filterResult = [1, 2, 3].filter(n => n>1); 
console.log("Filter:");
console.log(filterResult);

let reduceResult = [1, 2, 3].reduce((acc, n) => acc + n, 0);
console.log("Reduce:");
console.log(reduceResult);

const result = ["1", "2", "3"].map((item) => parseInt(item));
console.log('ejercicio map ' + result);

// Uso de currying (o curryficación)
// Currificar consiste en convertir una función de múltiples variables en una secuencia de  funciones unarias
// Esto hace que, si la función tiene N argumentos de entrada, nunca se ejecutará si no le proporcionamos todos los argumentos de entrada que pide

/**
 * Normal
 * Suma de dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const suma = (a, b) => a + b;

const resultadoSumaNormal = suma(3,5);
console.log('suma normal: ' + resultadoSumaNormal);


/**
 * Currificando la función
 * ES6
 * @param {number} a
 * @returns {number}
 */
const sumaCurry = (a) => (b) => a + b;
const resultadoCurry = sumaCurry(1)(2)
console.log('resultado Curryficacion ' + resultadoCurry);

/**
 * Misma función con sintaxis de ES5
 * @param {number} a
 * @returns {number}
 */
function sumaCurryES(a) {
    return function(b) {
      return a + b;
    }
}

const resultadoSumaES = sumaCurryES(3)(5);
console.log('ES5 ' + resultadoSumaES);

const sumPending = sumaCurryES(3); // (b) => a + b
console.log('sumPending' + sumPending);
sumPending(2);
console.log('sumPending(2)  ' + sumPending(2));




const sumaConCurry = curry((a, b) => a + b);

const resultadoCurry = sumaConCurry(3, 5) // => 8
console.log('resultadoCurry' + resultadoCurry);
const resultadoCurrysuma2 = sumaConCurry(3)(5) // => 8
console.log('resultadoCurrysuma2' + resultadoCurrysuma2);