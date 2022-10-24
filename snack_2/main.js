/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

const zucchine = [
    {
        varieta:'verdi',
        peso: 0.5,
        lunghezza: 20,
    },
    {
        varieta:'chiare',
        peso: 0.2,
        lunghezza: 18,
    },
    {
        varieta:'tonde',
        peso: 0.3,
        lunghezza: 5,
    },
    {
        varieta:'lunghe fiorentine',
        peso: 0.5,
        lunghezza: 12,
    },
    {
        varieta:'trombetta',
        peso: 0.7,
        lunghezza: 14,
    },
    {
        varieta:'gialle',
        peso: 0.4,
        lunghezza: 16,
    },
    {
        varieta:'siciliane',
        peso: 0.2,
        lunghezza: 18,
    },
    {
        varieta:'bianche triestine',
        peso: 0.1,
        lunghezza: 19,
    },
    {
        varieta:'patisson',
        peso: 0.2,
        lunghezza: 17,
    },
    {
        varieta:'crookneck',
        peso: 0.6,
        lunghezza: 20,
    },
  
]
let zucchineSottoiQuindici =[];
let zucchineSopraiQuindici =[];

zucchine.forEach(element => {
    if (element.lunghezza >= 15){
        zucchineSopraiQuindici.push(element);
    }else{
        zucchineSottoiQuindici.push(element);
    }
});

console.log(zucchineSopraiQuindici);
console.log(zucchineSottoiQuindici);

peso(zucchineSopraiQuindici);
peso(zucchineSottoiQuindici);



function peso (array){
    let result = 0;
array.forEach(element => {
    result += element.peso
});

console.log(result.toFixed(3) + 'kg');
}


