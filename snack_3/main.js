/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */



const parola = prompt ('inserisci parola');
invertiParola(parola);

function invertiParola(input) {
    let result ='';
for (let i = input.length-1; i >= 0; i--) {
    const element = input[i];
    result += element;
}
alert(result);
}






