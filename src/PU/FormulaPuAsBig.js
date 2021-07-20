const teste = require('as-big')

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const fatordi = calculoFatorDi(mediaCdi)
    const fatorspread = calculoFatorSpread(porcentagem, dp);

    const fatordiacumulado = fatorDiAcumulado.times(fatordi);
    const fatorjuros = fatordiacumulado.times(fatorspread);

    const pu = vne.times(fatorjuros);
    return pu
}

function calculoFatorDi(mediaCdi) {
    return ((mediaCdi / 100) + 1).pow((1 / 252));
}

function calculoFatorSpread(porcentagem, dp) {
    return (1 + porcentagem).pow((dp / 252));
}
function calculoPuPre(vne, porcentagem, dp) {
    const pu = vne.times(((1 + porcentagem).pow(dp / 252)));
    return pu
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }