/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

"use strict";

let numeri = 100; //inizializziamo la variabile numeri
for(let i = 1; i<= numeri; i++){  //apriamo il ciclo for
    if(i % 3 === 0 && i % 5 === 0){ //se ik numero è divisibile sia per 3 che per 5 stampa FizzBuzz
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){ //altrimenti se il numero è divisibile solo per 3 stampa Fizz
        console.log("Fizz");
    }
    else if(i % 5 === 0){ //altrimenti se il numero è divisibile solo per 5 stampa Buzz
        console.log("Buzz");
    }
    else { // in tutti gli altri casi stampa "i" con il numero corrispondente fino a 100
        console.log(i);
    }
}


