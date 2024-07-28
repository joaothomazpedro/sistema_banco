const Conta = require("./class_conta");

class Conta_Corrente extends Conta{
    constructor(titular, saldo ,juros) {
        super(titular, saldo)
        this.juros = juros
    }

    aplicar_juros(){
        const jurosAplicado = (this.saldo * this.juros) / 100;
        this.saldo += jurosAplicado;
        this.transacoes.push(`Juros aplicados: + ${jurosAplicado.toFixed(2)}`);
        console.log(`Juros de ${jurosAplicado.toFixed(2)} aplicados com sucesso!`);
    }

    static fromConta(conta, juros = 0) {
        return new Conta_Corrente(conta.titular, conta.id_conta, conta.saldo, juros);
    }
}

module.exports = Conta_Corrente;