/* Bonus:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */



const persone = [
    {
        nome: 'Rodrigo',
        cognome: 'Fantechi',
        eta: 15,
    },
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 18,
    },
    {
        nome: 'federica',
        cognome: 'Martini',
        eta: 25,
    },

    {
        nome: 'Alessia',
        cognome: 'Panzani',
        eta: 12,
    },
]

const nuovoArray =[];
persone.forEach(element => {
    let persona;
    if (element.eta>= 18){
        persona ={
            ...element,
            text: `${element.nome} ${element.cognome} può guidare`
        } 
    } else{
        persona ={
            ...element,
            text: `${element.nome} ${element.cognome} non può guidare`
    }
}
    nuovoArray.push(persona);
});


console.log(nuovoArray);
