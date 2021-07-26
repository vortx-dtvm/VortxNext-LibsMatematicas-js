const Decimal = require('decimal.js');

function calculoValorCota(ativos, passivos, numeroDeCotas) {

    const ativosB = ativos.map(ativo => new Decimal(ativo));
    const passivosB = passivos.map(passivos => new Decimal(passivos));
    const numeroDeCotasB = new Decimal(numeroDeCotas);

    const totalAtivos = calculoAtivo(ativosB);
    const totalPassivos = calculoPassivo(passivosB);
    const valorDaCota = new Decimal(totalAtivos.minus(totalPassivos)).dividedBy(numeroDeCotasB);
    return valorDaCota
}

function calculoAtivo(ativosB) {
    let totalAt = new Decimal(0);
    ativosB.forEach(ativosB => {
        totalAt = new Decimal(totalAt.plus(ativosB));
    });
    return totalAt
}

function calculoPassivo(passivosB) {
    let totalPa = new Decimal(0);
    passivosB.forEach(passivosB => {
        totalPa = new Decimal(totalPa.plus(passivosB));
    });
    return totalPa
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }