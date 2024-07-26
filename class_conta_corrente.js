const Conta = require("./class_conta");

class Conta_Corrente extends Conta{
    constructor(juros = 0.2) {
        super()
        this.juros = juros
    }

    aplicar_juros(){
        const jurosAplicado = this.saldo * this.juros
        this.saldo += jurosAplicado;
        this.transacoes.push(`Juros aplicados: + ${jurosAplicados.toFixed(2)}`);
        console.log(`Juros de ${jurosAplicados.toFixed(2)} aplicados com sucesso!`);
    }
}

module.exports = Conta_Corrente;