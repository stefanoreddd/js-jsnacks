let word1 = prompt("Inserisci la prima parola");
let word2 = prompt("Inserisci la seconda parola");

if (word1.length > word2.length){
    console.log(word2);
    console.log(word1);
    console.log("La parola più corta è la seconda");
}
else if (word2.length > word1.length){
    console.log(word1);
    console.log(word2);
    console.log("La parola più corta è la prima");
} else {
    console.log("Le parole hanno uguale lunghezza");
}