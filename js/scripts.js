function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let computerChoice;    
    switch(num){
        case 0:
            computerChoice = 'Pedra';
            break;
        case 1:
            computerChoice = 'Papel';
            break;
        case 2:
            computerChoice = 'Tesoura';
            break;            
    }

    return computerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection){

   let result;

    if(playerSelection == 'PEDRA'){
        switch(computerSelection){
            case 'PEDRA':
                console.log(`Empate: ${playerSelection} é igual a ${computerSelection}`);
                result = "EMPATE";
                break;
            case 'PAPEL':
                console.log(`Perdeu: ${playerSelection} perde para ${computerSelection}`);
                result = "DERROTA";
                break;
            case 'TESOURA':
                console.log(`Venceu: ${playerSelection} ganha de ${computerSelection}`);            
                result = "VITORIA";
                break;
        }
    }


    if(playerSelection == 'PAPEL'){
        switch(computerSelection){
            case 'PAPEL':
                console.log(`Empate: ${playerSelection} é igual a ${computerSelection}`);
                result = "EMPATE";
                break;
            case 'TESOURA':
                console.log(`Perdeu: ${playerSelection} perde para ${computerSelection}`);
                result = "DERROTA";
                break;
            case 'PEDRA':
                console.log(`Venceu: ${playerSelection} ganha de ${computerSelection}`);
                result = "VITORIA";
                break;             
        }
    }


    if(playerSelection == 'TESOURA'){
        switch(computerSelection){
            case 'TESOURA':
                console.log(`Empate: ${playerSelection} é igual a ${computerSelection}`);
                result = "EMPATE";
                break;
            case 'PEDRA':
                console.log(`Perdeu: ${playerSelection} perde para ${computerSelection}`);
                result = "DERROTA";
                break;
            case 'PAPEL':
                console.log(`Venceu: ${playerSelection} ganha de ${computerSelection}`); 
                result = "VITORIA";
                break;          
        }
    }


    return result;
}

function playerOption(){
    let playerOption = window.prompt('Digite sua opção: ');    
    
    switch(playerOption.toUpperCase()){
        case 'PEDRA':
            playerOption = 'PEDRA';
            break;
        case 'PAPEL':            
            playerOption = 'PAPEL';
            break;
        case 'TESOURA':
            playerOption = 'TESOURA';
            break;
        default:
            console.log("Pedra, Papel ou Tesoura");
    }

    return playerOption;
}

function game(){    
    let vitoria = 0;
    let derrota = 0;
    
    
    for(let i = 0; i < 5; i++){
        let result = playRound(playerOption(), getComputerChoice());
        if(result == 'VITORIA'){
           vitoria++;
        }

        if(result == 'DERROTA'){
            derrota++; 
        }        
    }

    console.log(vitoria);
    console.log(derrota);
   

    if(vitoria > derrota){
        console.log(`Você VENCEU: ${vitoria} x ${derrota}`);
    }else if (vitoria < derrota) {
        console.log(`Você PERDEU: ${vitoria} x ${derrota}`);
    }else{
        console.log(`Empate: ${vitoria} x ${derrota}`);
    }

}

game();

