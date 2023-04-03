let number1 = prompt("Scegli il primo numero");
let number2 = prompt("Scegli il secondo numero");

number1 = parseInt(number1);
number2 = parseInt(number2);

if (number1 > number2){
    console.log(number1);
    console.log("il numero maggiore è il primo");
} 
else if (number2 > number1) {
    console.log(number2);
    console.log("il numero maggiore è il secondo");
} else {
    console.log(number1);
    console.log("i due numeri sono uguali");
}