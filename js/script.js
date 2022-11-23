let fizz = document.getElementById("fizz");
let buzz = document.getElementById("buzz");
let fizzBuzz = document.getElementById("fizzbuzz");
let numbers = document.getElementById("numbers");

//? scrivi un programma che stampi in console i numeri da 0 a 100
for (let i = 0; i <= 100; i++) {

  if (i % 15 === 0) {
    //? Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    fizzBuzz.append("FizzBuzz! ");
    console.log("FizzBuzz");

  } else if (i % 3 === 0) {
    //? per i multipli di 3 stampi “Fizz”
    fizz.append("Fizz! ");
    console.log("Fizz");

  } else if (i % 5 === 0) {
    //? per i multipli di 5 stampi “Buzz”
    buzz.append("Buzz! ");
    console.log("Buzz");

  } else {
    console.log(i);
    numbers.append(i + "! ");

  }

}