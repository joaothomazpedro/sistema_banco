class Conta {
    constructor(titular, id_conta, saldo, data_criacao, transacoes) {
        this.titular = titular,
            this.id_conta = id_conta,
            this.saldo = saldo,            
            this.data_criacao = new Date(),
            this.transacoes = [];
    }
    
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            this.transacoes.push(`Depósito: ${valor}R$`)
            console.log(`Depósito de ${valor} realizada`);
        }
        else {
            console.log("Valor de depósito inválido tente novamente");
        }
    }

    sacar(valor) {
        if (0 < valor <= this.saldo) {
            this.saldo -= valor;
            this.transacoes.push(`Saque: ${valor}R$`)
            console.log(`Saque de ${valor} realizada`);
        }
        else {
            console.log("Valor de saque inválido tente novamente");
        }
    }

    exibir_saldo(){
        console.log(`Saldo atual de: ${this.saldo} `);
    }
}




module.exports = Conta;