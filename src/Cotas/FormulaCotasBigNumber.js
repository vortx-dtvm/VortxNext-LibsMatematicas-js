const BigNumber = require('bignumber.js');

function calculoValorCota(ativos, passivos, numeroDeCotas) {

    const ativosB = ativos.map(ativo => new BigNumber(ativo));
    const passivosB = passivos.map(passivos => new BigNumber(passivos));
    const numeroDeCotasB = new BigNumber(numeroDeCotas);

    const totalAtivos = calculoAtivo(ativosB);
    const totalPassivos = calculoPassivo(passivosB);
    const valorDaCota = new BigNumber(totalAtivos.minus(totalPassivos)).dividedBy(numeroDeCotasB);
    return valorDaCota
}

function calculoAtivo(ativosB) {
    let totalAt = new BigNumber(0);
    ativosB.forEach(ativosB => {
        totalAt = new BigNumber(totalAt.plus(ativosB));
    });
    return totalAt
}

function calculoPassivo(passivosB) {
    let totalPa = new BigNumber(0);
    passivosB.forEach(passivosB => {
        totalPa = new BigNumber(totalPa.plus(passivosB));
    });
    return totalPa
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }