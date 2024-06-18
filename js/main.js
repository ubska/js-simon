// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const numeriCasuali = generaNumeriCasuali(1, 100, 5);
const container = document.querySelector(".container")
container.append(numeriCasuali);

let userNumber;
// Da lì parte un timer di 30 secondi.
setTimeout(myFunction, 3000);
function myFunction() {

    // chiedo al utente di inserire i numeri uno alla volta
    const arrayNumber = [];
    for (let i = 0; i < 5; i++){
        let userNumber = parseInt(prompt("Inserisci i numeri precedentemente visti:"));
        arrayNumber.push(userNumber);
    }
    console.log(arrayNumber);

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    const numeriIndovinati = [];
    for (let i = 0; i < numeriCasuali.length; i++) {
        if (arrayNumber.includes(numeriCasuali[i])) {
            numeriIndovinati.push(numeriCasuali[i]);
        }
    }

    console.log(`Hai ricordato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`);

    
    console.log(numeriIndovinati);

}

