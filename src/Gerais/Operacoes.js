
function calculaGaussiana(x, media, desvioPadrao) {
    const e = 2.71828182845;
    const distribuicao = Math.pow(((x - media) / (desvioPadrao)), 2);
    const eulerElevado = Math.pow(e, ((-0.5 * distribuicao)));
    const desvio = (1 / ((Math.sqrt(2 * Math.PI)) * desvioPadrao))
    const resultado = eulerElevado*desvio
    return resultado
}

function calculaSnellDescartes(n1, n2, ang1) {
    const conversaoRadAng1 = (ang1 * Math.PI / 180);
    const senoAng1 = Math.sin(conversaoRadAng1);
    const indiceRefracao = n1 * senoAng1;
    const ang2 = indiceRefracao / n2;
    const arcosenoAng2 = Math.asin(ang2);
    return arcosenoAng2 * 180 / Math.PI
}

function calculaLog(x, y) {
    const logX = Math.log(x);
    const logy = Math.log(y);
    return logX / logy;
}

function calculaBhaskara(coef1, coef2, coef3) {
    const delta = Math.pow(coef2, 2) - (4 * coef1 * coef3);
    const raiz1 = (-coef2 - Math.sqrt(delta)) / (2 * coef1);
    const raiz2 = (-coef2 + Math.sqrt(delta)) / (2 * coef1);
    return raiz1/raiz2
}

function calculoJurosSimples(capital, taxaJuros, numeroPeriodos) {
    return capital * taxaJuros * numeroPeriodos
}

function calculoJurosCompostos(capital, taxaJuros, numeroPeriodos) {
    const taxadeJuros = (1 + taxaJuros);
    const taxaNoPeriodo = Math.pow(taxadeJuros, numeroPeriodos);
    return capital * taxaNoPeriodo
}

function calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodos) {
    const taxaNoPeriodo = Math.pow((1 + taxaJuros), numeroPeriodos);
    const denominador = 1 - (1 / taxaNoPeriodo);
    const capitaleTaxa = capitalInicial * taxaJuros;
    return capitaleTaxa / denominador
}

function desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores) {
    const diferencaPadrao = Math.pow((valorIndividual - mediaDosValores), 2);
    const variancia = diferencaPadrao / numeroDeValores;
    const desvioPadrao = Math.sqrt(variancia, 2);
    return desvioPadrao
}
module.exports = {
    calculaGaussiana,
    calculaSnellDescartes,
    calculaLog,
    calculaBhaskara,
    calculoJurosSimples,
    calculoJurosCompostos,
    calculoAmortizacao,
    desvioPadrao
}