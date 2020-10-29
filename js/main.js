/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/




$(document).ready( function() {
  // VARIABILI
  var numUtente = []; //numeri dati dall'utente
  var numRandom = []; // numeri random creati dal pc
  var quantiNum = 5; //quantita di numeri creati
  var tempoNum = 5 * 1000; //tempo dopo il quale inizia il gioco
  //POPOLAMENTO ARRAY DEI NUM DEL PC
  var campoGioco = popolamento(quantiNum , numRandom);
  alert( campoGioco );
  setTimeout( function() {
    numUtente = inserisciNum(quantiNum , numUtente);
    console.log(numUtente);
  } , tempoNum);





}); //FINE DOCUMENT READY

// UTILITY
/**FUNZIONE POPOLA ARRAY RANDOM
 *@@ param1 {quantiNum} quanti numeri nell array
 *@@ param2 {numRandom} array da popolare
 */
function popolamento(quantiNum , numRandom) {
  for (var i = 0; i < quantiNum;) {
    var numPc = random(1 , 100);
    if (! numRandom.includes(numPc) ) {
      numRandom.push(numPc);
      i++;
    }
  }
  return numRandom;
};
/**FUNZIONE INSERISCI I NUMERI PER GIOCARE
*@@ param1 {quantiNum} quanti numeri nell array
*@@ param2 {numUtente} array da popolare
 */
function inserisciNum(quantiNum , numUtente) {
 for (var c = 0; c < quantiNum;) {
   var sceltaNum = parseInt( prompt('Inserisci un numero da 1 a 100 : ') );
   if (! numUtente.includes(sceltaNum) ) {
     numUtente.push(sceltaNum);
     c++;
   } else {
     sceltaNum = parseInt( prompt('Hai già scelto questo numero , scegline un\'altro : ') );
   }
 }
 return numUtente;
}
/**FUNZIONE NUMERI RANDOM
 *@@ param1 {min} range minimo
 *@@ param2 {max} range massimo
 */
function random(min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};
