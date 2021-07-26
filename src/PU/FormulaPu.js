
function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const fatordi = calculoFatorDi(mediaCdi)
    const fatorspread = calculoFatorSpread(porcentagem, dp);

    const fatordiacumulado = (fatorDiAcumulado * fatordi).toFixed(14);
    const fatorjuros = floorFigure((fatordiacumulado * fatorspread),14);

    const pu = vne * fatorjuros;
    return pu
}

function calculoFatorDi(mediaCdi) {
    return ((Math.pow(((mediaCdi / 100) + 1), (1 / 252)))).toFixed(14);
}

function calculoFatorSpread(porcentagem, dp){
    return Math.pow((1 + porcentagem), (dp / 252)).toFixed(14);
}
function calculoPuPre(vne, porcentagem, dp){
    const pu = vne * Math.pow((1 + porcentagem), (dp / 252));
    return pu   
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }