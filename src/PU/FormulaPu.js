function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const fatordi = calculoFatorDi(mediaCdi)
    const fatorspread = calculoFatorSpread(porcentagem, dp);

    const fatordiacumulado = fatorDiAcumulado * fatordi;
    const fatorjuros = fatordiacumulado * fatorspread;

    const pu = vne * fatorjuros;
    return pu
}

function calculoFatorDi(mediaCdi) {
    return ((Math.pow(((mediaCdi / 100) + 1), (1 / 252))));
}

function calculoFatorSpread(porcentagem, dp){
    return Math.pow((1 + porcentagem), (dp / 252));
}
function calculoPuPre(vne, porcentagem, dp){
    const pu = vne * Math.pow((1 + porcentagem), (dp / 252));
    return pu   
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }