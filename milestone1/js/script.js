// Scrivi nella console tutti i numeri da 0 a 100

// Seleziono la classe container
const containerBox = document.querySelector('.container');

// Inizializzo un ciclo FOR da 1 a 100 con incremento di 1
for(let i = 1; i <= 100; i++) {
    // console.log(i);

    let fizzBuzzDom;
    
    // Mostra la stringa FizzBuzz per i valori multipli di 3 e di 5
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzDom = 'fizzbuzz';
    }
    
    // Mostra la stringa Fizz per i valori multipli di 3
    else if (i % 3 === 0) {
        fizzBuzzDom = 'fizz';
    }

    // Mostra la stringa Buzz per i valori multipli di 5
    else if (i % 5 === 0) {
        fizzBuzzDom = 'buzz';
    }

    else {
        fizzBuzzDom = i;
    }

    console.log(fizzBuzzDom);
}
