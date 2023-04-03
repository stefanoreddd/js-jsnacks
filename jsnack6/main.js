let giuseppe = Math.floor(Math.random()*10 + 1);

let alfredo = prompt("Scegli un numero da 1 a 10");
alfredo = parseInt(alfredo);

if (alfredo == giuseppe){
    console.log(giuseppe);
    console.log("Congratulazioni, hai vinto!");
} 
else if (alfredo > 10){
    console.log("Il numero deve essere inferiore a 10!");
}else {
    console.log(giuseppe);
    console.log("Mi spiace, hai perso!");
}