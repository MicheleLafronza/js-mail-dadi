
const buttonPlay = document.querySelector(".btnPl");

let numUser;

let numPc;

let displayUser = document.querySelector(".player");

let displayPc = document.querySelector(".pc");

let result = document.querySelector(".result");

// genero numero random da 1 a 6 per l'utente
buttonPlay.addEventListener("click",
    function() {
        numUser = Math.floor(Math.random() * 6) + 1;
        displayUser.innerHTML=("Hai fatto: " + numUser);
        console.log(numUser);

        numPc = Math.floor(Math.random() * 6) + 1;
        displayPc.innerHTML=("Il pc ha fatto: " + numPc);
        console.log(numPc);

            if (numUser > numPc) {
                result.innerHTML=("Congratulazioni, hai vinto!!");
                console.log("Congratulazioni, hai vinto!!");
            } else if (numUser < numPc) {
                result.innerHTML=("Mi dispiace, il computer è stato più fortunato");
                console.log("Mi dispiace, il computer è stato più fortunato");
            } else if (numUser === numPc) {
                result.innerHTML=("Oh ma è un pareggio!!");
                console.log("Oh ma è un pareggio!!");
        }
    }
)







