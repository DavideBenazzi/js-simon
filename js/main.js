/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/




$(document).ready( function() {
  console.log('js ok!!!');
  // VARIABILI
  var numUtente = []; //numeri dati dall'utente
  var numRandom = []; // numeri random creati dal pc
  var quantiNum = 5; //quantita di numeri creati
  var tempoNum = 30 * 1000; //tempo dopo il quale inizia il gioco
  //POPOLAMENTO ARRAY DEI NUM DEL PC
  for (var i = 0; i < quantiNum;) {
    var numPc = random(1 , 100);
    if (! numRandom.includes(numPc) ) {
      numRandom.push(numPc);
      i++;
    }
  }
  alert(numRandom);






}); //FINE DOCUMENT READY

// UTILITY
/**FUNZIONE NUMERI RANDOM
 *@@ param1 {min} range minimo
 *@@ param2 {max} range massimo
 */
function random(min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
