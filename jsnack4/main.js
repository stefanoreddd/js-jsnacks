let gatsbyInvited = ["Gatsby", "Mario", "Marco", "Marcello", "John", "Mary", "Anthony", "Giulio"];
let invitedCheck = prompt("Inserisci il tuo nome:");

if (gatsbyInvited.includes(invitedCheck)){
    console.log("Congratulazioni, sei invitato alla festa!");
} else {
    console.log("Spiacente, non sei invitato alla festa!");
}