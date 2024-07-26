const prompt = require("prompt-sync")();

const Conta = require("./class_conta");
const Conta_Corrente = require("./class_conta_corrente");
const Conta_Poupanca = require("./class_conta_poupanca");

function Menu_Display() {
    console.log("O que deseja fazer agora?: ");
    prpt_display = Number(prompt(
        "[1] - Depositar\n" 
        +"[2] - Sacar\n"
        +"[3] - Conferir Saldo\n"
        +"[4] - Gerar extrato\n"
        +"[5] - Sair \n\n"
    ))

    if(prpt_display == 1) {
        valor_deposito = Number(prompt("Quanto deseja depositar? "))
        Count.depositar(valor_deposito)
    }
    else if(prpt_display == 2){
        valor_saque = Number(prompt("Quanto deseja sacar? "))
        Count.sacar(valor_saque)        
    }
    else if(prpt_display == 3){
        Count.exibir_saldo()        
    }
    else if(prpt_display == 4){
        Count.extrato()
    }
    else if(prpt_display == 5){
        console.log("Até mais");         
    }
    else{
        console.log("Digite um número válido, por favor");
        return;
    }
        
}

/* prpt = prompt abreviado*/

    prpt_conta = prompt("Olá, deseja criar uma conta?: [Y/N] ").toLowerCase()
    if (prpt_conta == "y") {

        prpt_name = prompt("Excelente, qual seria seu nome?: ");

        if (isNaN(prpt_name)) {
            Count = new Conta(prpt_name, 1, 0)  
            Menu_Display()  
        }
    
        else {
            console.log("Digite um nome válido por favor");
        }
    
    }
   
    else if (prpt_conta == "n") {
        console.log("Até outro dia");   
    }

    else {
        console.log("Por favor confirme novamente: [Y/N]");
    }
