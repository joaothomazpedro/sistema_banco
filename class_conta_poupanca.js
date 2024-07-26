const Conta = require("./class_conta");

class Conta_Poupanca extends Conta{
    constructor(rendimento = 0.2){
        super()
        this.rendimento = rendimento
    }

    aplicarRendimento(){
        
    }
}

module.exports = Conta_Poupanca