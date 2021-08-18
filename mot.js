// Tous les éléments ciblés dans le HTML
let guessPrice = document.getElementById("emplacementdumot");
let validationButton = document.getElementById("prompt");
let paragrapheMessage = document.getElementById("send");

// Gestion des évènements
validationButton.onclick = checkGuess;
let motauxhasard = ["poire", "maison", "caractère", "boire", "voiture"]
// Variables
var targetarray= [];
nombre de lettre 
mot gagnant
essai nombre
echec essai

// Nombre essai restant
var let try 

// Générer un mot aléatoire
initGame();