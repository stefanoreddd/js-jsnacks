let number1 = prompt("Inserisci un numero");
let number2 = prompt("Inserisci un altro numero");
let number3 = prompt("Inserisci un altro numero");
let number4 = prompt("Inserisci un altro numero");
let number5 = prompt("Inserisci un altro numero");
let number6 = prompt("Inserisci un altro numero");
let number7 = prompt("Inserisci un altro numero");
let number8 = prompt("Inserisci un altro numero");
let number9 = prompt("Inserisci un altro numero");
let number10 = prompt("Inserisci un altro numero");

number1 = parseInt(number1);
number2 = parseInt(number2);
number3 = parseInt(number3);
number4 = parseInt(number4);
number5 = parseInt(number5);
number6 = parseInt(number6);
number7 = parseInt(number7);
number8 = parseInt(number8);
number9 = parseInt(number9);
number10 = parseInt(number10);

let sommaNumeri = `
------ Somma numeri ------
Primo numero: ${number1};
Secondo numero: ${number2};
Terzo numero: ${number3};
Quarto numero: ${number4};
Quinto numero: ${number5};
Sesto numero: ${number6};
Settimo numero: ${number7};
Ottavo numero: ${number8};
Nono numero: ${number9};
Decimo numero:${number10};

Somma numeri: ${number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10};
--------------------------
`

console.log(sommaNumeri);