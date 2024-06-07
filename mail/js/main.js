// preparo un array con le mail degli invitati
const partyList = ["tonygmail.com", "mike@gmail.com", "luke@gmail.com", "paul@gmail.com", "jack@gmail.com"];
console.log("Lista invitati", partyList);

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

            // se la mail dell'utente combacia mando un messaggio di invito
            
            if (inputMail === mailInv) {
                console.log("La tua mail è tra la lista degli invitati");
            } else {
                console.log("mi dispiace");
            }
        }
    }
)








// se la mail non combacia gli dico che mi dispiace T_T