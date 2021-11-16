// Scrivi nella console tutti i numeri da 0 a 100

for(let i = 1; i <= 100; i++) {
    console.log(i);

    let fizzBuzzDom;
    if (i % 3 === 0) {
        fizzBuzzDom = 'Fizz'
        
    }

    if (i % 5 === 0) {
        fizzBuzzDom = 'Buzz'
    }

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzDom = 'FizzBuzz'
    }

    console.log(fizzBuzzDom);
}
