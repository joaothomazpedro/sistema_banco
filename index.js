const prompt = require("prompt-sync")();

const Conta = require("./class_conta");
const Conta_Corrente = require("./class_conta_corrente");
const Conta_Poupanca = require("./class_conta_poupanca");

/* prpt = prompt abreviado*/

prpt_conta = prompt("Olá, deseja criar uma conta?: [Y/N] ").toLowerCase()
if (prpt_conta == "y") {
    
    prpt_name = prompt("Excelente, qual seria seu nome?: ");
    
    if (isNaN(prpt_name)) {
        Count = new Conta(prpt_name,1,0)
        console.log(Count);        
    } 

    else {
        console.log("Digite um nome válido por favor");
    }}

    else if(prpt_conta == "n") {
        console.log("Até outro dia");
    }
    
    else{
        console.log("Por favor confirme novamente: [Y/N]");
    }



