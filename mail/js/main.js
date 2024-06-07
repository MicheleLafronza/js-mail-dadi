// preparo un array con le mail degli invitati
const partyList = ["tonygmail.com", "mike@gmail.com", "luke@gmail.com", "paul@gmail.com", "jack@gmail.com"];
console.log("Lista invitati", partyList);

// creo variabile per la risposta finale
let risp = document.querySelector(".risposta");


// chiedo all'utente la sua mail con una funzione
const button = document.querySelector(".btn");

button.addEventListener("click",
    function() {
        let inputMail = document.querySelector(".mail").value;
        console.log("mail inserita dall'utente", inputMail);
        
        // variabile per cambiare esito della risposta finale
        let t = false;

        // controllo con un ciclo ogni mail degli invitati
        for (let i=0; i < partyList.length; i++){
            let mailInv = partyList[i];
            console.log("mail controllo ciclo",mailInv);

            // se la mail dell'utente combacia mando un messaggio di invito altrimenti no
            if (inputMail === mailInv) {
                // risp.innerHTML=("Sei invitato alla festa!!!")
                t = true;
                console.log("Sei invitato alla festa!!!");
                break;
            }
        }

        // output risposta finale
        if (t === true) {
            risp.innerHTML=("Sei invitato alla festa!!!")
        } else if (t === false) {
            risp.innerHTML=("Non sei invitato alla festa!!!")
        }

    }
)








