// preparo un array con le mail degli invitati
const partyList = ["tonygmail.com", "mike@gmail.com", "luke@gmail.com", "paul@gmail.com", "jack@gmail.com"];
console.log(partyList);

// chiedo all'utente la sua mail con una funzione
const button = document.querySelector(".btn");

button.addEventListener("click",
    function() {
        let inputMail = document.querySelector(".mail").value;
        console.log(inputMail);
    }
)



// controllo con un ciclo ogni mail degli invitati

// se la mail dell'utente combacia mando un messaggio di invito

// se la mail non combacia gli dico che mi dispiace T_T