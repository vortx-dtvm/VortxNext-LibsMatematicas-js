const Big = require('big.js');

function calculoValorCota(ativos, passivos, numeroDeCotas) {

    const ativosB = new Big(ativos);
    const passivosB = new Big(passivos);
    const numeroDeCotasB = new Big(numeroDeCotas);

    const totalAtivos = calculoAtivo(ativosB);
    const totalPassivos = calculoPassivo(passivosB);
    const valorDaCota = (totalAtivos.minus(totalPassivos)).div(numeroDeCotasB);
    return valorDaCota
}

function calculoAtivo(ativosB) {
    let totalAt = new Big(0);
    ativosB.forEach(ativosB => {
        totalAt += ativosB;
    });
    return totalAt
}

function calculoPassivo(passivosB) {
    let totalPa = new Big(0);
    passivosB.forEach(passivosB => {
        totalPa += passivosB;
    });
    return totalPa
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }