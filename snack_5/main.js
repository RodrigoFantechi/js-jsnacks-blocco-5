/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b” */

const larray = [1,2,3,4,5,6,7,8,9,10];
const numero1 = 2;
const numero2 = 5
const nuovoArray = compilatore(larray,numero1,numero2);


console.log(nuovoArray);

function compilatore(array,primoNumero,secondoNumero) {

    let nuovoArray = array.filter((numero,index) => {
        if(index >primoNumero && index<secondoNumero){
            return true;
        }
        return false;
    })

    return nuovoArray;
}


