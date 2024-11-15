
// Chiediamo all'utente di inserire il numero massimo (n)
let n = Number(prompt("Inserisci il numero massimo fino al quale stampare i numeri:"));

// Verifica se l'utente ha inserito un numero valido
if (isNaN(n) || n <= 0) {
    alert("Riprova! scelta non valida");
} else {
    // Funzione che stampa i numeri da 1 a n
    function stampaNumeri(n) {
        for (let i = 1; i <= n; i++) {
            // Se il numero è multiplo di 15 stampa FizzBuzz
            if (i % 15 === 0) {
                console.log("fizzBuzz");
            }
            // Se il numero è multiplo di 3 stampa Fizz
            else if (i % 3 === 0) {
                console.log("Fizz");
            }
            // Se il numero è multiplo di 5 stampa Buzz
            else if (i % 5 === 0) {
                console.log("Buzz");
            }
            // Altrimenti stampa il numero
            else {
                console.log(i);
            }
        }
    }
    // richiamao della funzione
    stampaNumeri(n);
}






