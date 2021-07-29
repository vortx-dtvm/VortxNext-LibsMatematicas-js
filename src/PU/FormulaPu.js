const { floorFigure } = require("../Util")
function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne) {

    const fatordiToFixed = (calculoFatorDi(mediaCdi).toFixed(14));
    const fatorditesteFloorFigure = floorFigure(calculoFatorDi(mediaCdi),14);
    const fatorspread = calculoFatorSpread(porcentagem, dp);

    const fatordiacumulado = (fatorDiAcumuladoAnterior * fatordiToFixed).toFixed(14);
    const fatorjurosFloorFigure = floorFigure((fatordiacumulado * fatorspread),14);
    const fatorjurostesteToFixed = ((fatordiacumulado * fatorspread).toFixed(14));

    const pu = vne * fatorjurostesteToFixed;
    return pu;
}

function calculoFatorDi(mediaCdi) {
    return((Math.pow(((mediaCdi / 100) + 1), (1 / 252))));
}

function calculoFatorSpread(porcentagem, dp){
    return Math.pow((1 + porcentagem), (dp / 252)).toFixed(14);
}
function calculoPuPre(vne, porcentagem, dp){
    const pu = vne * Math.pow((1 + porcentagem), (dp / 252));
    return pu   
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }