/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/

const numeri =[1,2,3];
const lettere =['a','b','c'];
let arrayUnito = unisciArray(numeri,lettere);
console.log(arrayUnito);


function unisciArray(primoArray, secondoArray) {
    let arrayUnito =[];
    primoArray.forEach(index => {
        arrayUnito.push(primoArray[index-1]);
        arrayUnito.push(secondoArray[index-1]);
    });
    return arrayUnito;
}






