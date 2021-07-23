const { subtract, add, divide } = require('mathjs');

function calculoValorCota(ativos, passivos, numeroDeCotas) {

    const totalAtivos = calculoAtivo(ativos);
    const totalPassivos = calculoPassivo(passivos);
    const valorDaCota = divide((subtract(totalAtivos, totalPassivos)), (numeroDeCotas));
    return valorDaCota
}

function calculoAtivo(ativos) {
    let totalAt = 0
    ativos.forEach(ativos => {
        totalAt = add(ativos, totalAt);
    });
    return totalAt
}

function calculoPassivo(passivos) {
    let totalPa = 0
    passivos.forEach(passivos => {
        totalPa = add(passivos, totalPa);
    });
    return totalPa
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }