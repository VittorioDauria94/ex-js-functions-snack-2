// Snack 1 - Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// function somma(a, b) {
//   return a + b;
// }

// const somma = function (a, b) {
//   return a + b;
// };

// const somma = (a, b) => a + b;

// console.log(somma(1, 6));

// Snack 2 - Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

// const quadrato = (num) => num * num;

// Snack 3 - Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;
// const dividi = (a, b) => a / b;
// const sottrai = (a, b) => a - b;

// const eseguiOperazione = (a, b, callback) => callback(a, b);

// Snack 4 - Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// const creaTimer = (ms) => () => setTimeout(() => console.log("Tempo scaduto"), ms);

// Snack 5 - Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

// const stampaOgniSecondo = (message) =>
//   setInterval(() => console.log(message), 1000);

// //fermo il lop dopo 5 secondi

// const id = stampaOgniSecondo("Ciao!");
// setTimeout(() => clearInterval(id), 5000);

// Snack 6 - Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function creaContatoreAutomatico(ms) {
//   let contatore = 0;
//   return () =>
//     setInterval(() => {
//       contatore++;
//       console.log(contatore);
//     }, ms);
// }

// //fermo il lop dopo 5 secondi

// const avvia = creaContatoreAutomatico(50);
// const id = avvia();

// setTimeout(() => clearInterval(id), 5000);

// Snack 7 - Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// function eseguiEferma(message, inizio, fine) {
//   let id;
//   setTimeout(() => {
//     id = setInterval(() => console.log(message), 1000);

//     setTimeout(() => clearInterval(id), fine); // se la fine è intesa come tempo totale basta mettere fine - inizio
//   }, inizio);
// }

// eseguiEferma("ciao", 3000, 5000);

// Snack 8 (Bonus) - Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// function contoAllaRovescia(num) {
//   let contatore = num;
//   const id = setInterval(() => {
//     console.log(contatore);

//     if (contatore === 0) {
//       console.log("Tempo Scaduto");
//       clearInterval(id);
//       return;
//     }

//     contatore--;
//   }, 1000);
// }

// contoAllaRovescia(10);

// Snack 9 (Bonus) - Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

// function sequenzaOperazioni(operazioni, intervallo) {
//   let i = 0;
//   function avanti() {
//     if (i >= operazioni.length) return;

//     operazioni[i]();
//     i++;

//     setTimeout(avanti, intervallo);
//   }

//   avanti(); // se volessi che anche la prima funzione parta dopo intervallo alloro metto setTimeout(avanti, intervallo);
// }

// Snack 10 (Bonus) - Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(callback, limite) {
  let ultimaChiamata = 0;
  return function (...args) {
    const adesso = Date.now();
    if (adesso - ultimaChiamata >= limite) {
      ultimaChiamata = adesso;
      callback(...args);
    }
  };
}
