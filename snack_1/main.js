/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

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
let result = 0;
zucchine.forEach(element => {
    result += element.peso
});

console.log(result.toFixed(3) + 'kg');