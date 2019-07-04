/* Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/


// Dichiarazione variabili
var numbersContainer = 100;

// Verifico e stampo i risultati
for (var i = 1; i <= numbersContainer; i++) {

  // se gli elementi sono multipli di 3 e 5 allora stampo FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " " + "FizzBuzz");

  // se gli elementi sono multipli di 3 allora stampo Fizz
  } else if (i % 3 == 0) {
    console.log(i + " " + "Fizz");

  // se gli elementi sono multipli di 5 allora stampo Buzz
  } else if (i % 5 == 0) {
    console.log(i + " " + "Buzz");

  // se gli elementi non sono multipli di di 3 o 5 non stampo nulla
  } else {
    console.log(i);
  }
}
