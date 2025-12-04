/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */

const invitedList = [
    'Rosa.Maligna@gmail.com',
    'Tre.Biscotti@gmail.com',
    'Nba.Giovaneuomo@gmail.com'
];

let userEmail = prompt("Inserisci la tua email");
let emailCheck = false;

for (let i = 0; i < invitedList.length; i++) {
    if (userEmail === invitedList[i]) {
        emailCheck = true;
    }
}
console.log(emailCheck);

if(emailCheck){
    alert("Sei invitato");
}
else {
    alert("Non sei invitato");
}

