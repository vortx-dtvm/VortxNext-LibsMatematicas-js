const Big = require('big.js');

function calculoValorCota(ativos, passivos, numeroDeCotas) {

    const ativosB = ativos.map(ativo => new Big(ativo));
    const passivosB = passivos.map(passivos => new Big(passivos));
    const numeroDeCotasB = new Big(numeroDeCotas);

    const totalAtivos = calculoAtivo(ativosB);
    const totalPassivos = calculoPassivo(passivosB);
    const valorDaCota = (totalAtivos.minus(totalPassivos)).div(numeroDeCotasB);
    return new Big(valorDaCota.toPrecision());
}

function calculoAtivo(ativosB) {
    let totalAt = new Big(0);
    ativosB.forEach(ativosB => {
        totalAt = totalAt.plus(ativosB);
    });
    return new Big(totalAt.toPrecision());
}

function calculoPassivo(passivosB) {
    let totalPa = new Big(0);
    passivosB.forEach(passivosB => {
        totalPa = totalPa.plus(passivosB);
    });
    return new Big(totalPa.toPrecision());
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }