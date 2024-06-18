// funzione che genera numeri casuali (array)
function generaNumeriCasuali(min, max, numero) {
     const numeriCasuali = [];
     while (numeriCasuali.length < numero) {
         const random = Math.floor(Math.random() * (max - min + 1)) + min;
         if (!numeriCasuali.includes(random)) {
             numeriCasuali.push(random);
         }
     }
     return numeriCasuali;
}