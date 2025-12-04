/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let playerNumber = Math.floor(Math.random() * 6) + 1;
let playerCpu = Math.floor(Math.random() * 6) + 1;
let versus = "CPU WON"
if(playerCpu > playerNumber){
    console.log(versus);
}else if(playerNumber > playerCpu){
    versus = "PLAYER WON" ;
    console.log(versus);
    
}else {
    versus = "DRAW"
    console.log(versus);
}