const { multiply, add, divide, pow } = require('mathjs');

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const fatordi = (calculoFatorDi(mediaCdi));
    const fatorspread = calculoFatorSpread(porcentagem, dp);
    const fatordiacumulado = multiply(fatorDiAcumulado,fatordi);
    const fatorjuros = multiply(fatordiacumulado,fatorspread);

    const pu = multiply(vne,fatorjuros);
    return pu
}

function calculoFatorDi(mediaCdi) {

    return pow((add((divide(mediaCdi,100)), 1)), (divide(1, 252)));
}

function calculoFatorSpread(porcentagem, dp) {
    return pow((add(1, porcentagem)), divide(dp, 252));
}
function calculoPuPre(vne, porcentagem, dp) {
    const pu = multiply(vne, (pow((add(1, porcentagem)), divide(dp, 252))));
    return pu
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }