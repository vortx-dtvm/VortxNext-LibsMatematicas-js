const BigNumber = require('bignumber.js');

function calculoValorCota(ativos, passivos, numeroDeCotas) {

    const ativosB = new BigNumber(ativos);
    const passivosB = new BigNumber(passivos);
    const numeroDeCotasB = new BigNumber(numeroDeCotas);

    const totalAtivos = calculoAtivo(ativosB);
    const totalPassivos = calculoPassivo(passivosB);
    const valorDaCota = (totalAtivos.minus(totalPassivos)).dividedBy(numeroDeCotasB);
    return valorDaCota
}

function calculoAtivo(ativosB) {
    let totalAt = new BigNumber(0);
    ativosB.forEach(ativosB => {
        totalAt += ativosB;
    });
    return totalAt
}

function calculoPassivo(passivosB) {
    let totalPa = new BigNumber(0);
    passivosB.forEach(passivosB => {
        totalPa += passivosB;
    });
    return totalPa
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }