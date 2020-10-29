/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

$(document).ready( function() {
  // REFERENZE
  var seleziona = $('#seleziona'); //selezione della quantita dei numeri con cui giocare
  var secondi = $('#secondi'); //selezione dei secondi di attesa da parte dell'utente
  var start = $('.start');

  // VARIABILI
  var numUtente = []; //numeri dati dall'utente
  var numRandom = []; // numeri random creati dal pc
  var quantiNum = 5; //quantita di numeri creati
  var tempoNum = 30 * 1000; //tempo dopo il quale inizia il gioco
  var numRicordati = []; //numeri ricordati

  //POPOLAMENTO ARRAY DEI NUM DEL PC
  start.click( function() {
    quantiNum =  seleziona.val();
    tempoNum = secondi.val() * 1000;
    var campoGioco = popolamento(quantiNum , numRandom);
    alert( 'Ecco i numeri da ricordare : ' + campoGioco );
    //LOOP DI GIOCO
    setTimeout( function() {
      numUtente = inserisciNum(quantiNum , numUtente);
      for (var a = 0; a < numUtente.length; a++) {
        if ( numRandom.includes(numUtente[a]) ) {
          numRicordati.push(numUtente[a]);
        }
      }
      if (numRicordati == 0) {
        alert('Non ti sei ricordato nemmeno un numero :\(');
      } else if (numRicordati.length === campoGioco.length) {
        alert('Complimenti! Hai ricordato tutti i numeri!');
      } else {
        alert('Ti sei ricordato i numeri : ' + numRicordati);
      }
    } , tempoNum);
  });
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
   if ((! numUtente.includes(sceltaNum)) && (! isNaN(sceltaNum))) {
     numUtente.push(sceltaNum);
     c++;
   } else {
     sceltaNum = parseInt( prompt('Numero non valido o già scelto , scegline un\'altro : ') );
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
