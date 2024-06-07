// preparo un array con le mail degli invitati
const partyList = ["tonygmail.com", "mike@gmail.com", "luke@gmail.com", "paul@gmail.com", "jack@gmail.com"];
console.log("Lista invitati", partyList);

// creo variabili per la risposta finale
let risp = document.querySelector(".risposta");
let t = 0;

// chiedo all'utente la sua mail con una funzione
const button = document.querySelector(".btn");

button.addEventListener("click",
    function() {
        let inputMail = document.querySelector(".mail").value;
        console.log("mail inserita dall'utente", inputMail);
        

        // controllo con un ciclo ogni mail degli invitati
        for (let i=0; i < partyList.length; i++){
            let mailInv = partyList[i];
            console.log("mail controllo ciclo",mailInv);

            // se la mail dell'utente combacia mando un messaggio di invito altrimenti no
            if (inputMail === mailInv) {
                // risp.innerHTML=("Sei invitato alla festa!!!")
                t = 1;
                console.log("Sei invitato alla festa!!!");
            }
        }

        if (t === 1) {
            risp.innerHTML=("Sei invitato alla festa!!!")
        } else if (t === 0) {
            risp.innerHTML=("Non sei invitato alla festa!!!")
        }

    }
)








