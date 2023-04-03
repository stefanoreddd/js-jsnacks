let peppino = prompt("Inserisci un numero da 1 a 1000");
peppino = parseInt(peppino);

for (let i=2; i<=peppino; i=i+2){
        if (peppino <= 1000){
            console.log(i);
        } 
        else {
        console.log("Il numero deve essere inferiore a 1000!");
    }
}