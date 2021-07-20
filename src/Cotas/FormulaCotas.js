function calculoValorCota(ativos, passivos, numeroDeCotas) {
    const totalAtivos = calculoAtivo(ativos);
    const totalPassivos = calculoPassivo(passivos);
    const valorDaCota = (totalAtivos - totalPassivos)/numeroDeCotas;
    return valorDaCota
}

function calculoAtivo(ativos) {
    let totalAt = 0
    ativos.forEach(ativos => {
        totalAt += ativos;
    });
    return totalAt
}

function calculoPassivo(passivos) {
    let totalPa = 0
    passivos.forEach(passivos => {
        totalPa += passivos;
    });
    return totalPa
}
module.exports = { calculoValorCota, calculoAtivo, calculoPassivo }