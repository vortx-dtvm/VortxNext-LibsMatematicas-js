const { multiply, add, divide, pow, subtract} = require('mathjs');

function calculaGaussiana(x, media, desvioPadrao) {
    const e = 2.71828182845;
    const distribuicao = pow((divide(subtract(x,media),(desvioPadrao))), 2);
    const eulerElevado = pow(e, (multiply(-0.5,distribuicao)));
    const desvio = divide(1,multiply((Math.sqrt(multiply(2,Math.PI))),desvioPadrao))
    return multiply(eulerElevado,desvio)
}

function calculaSnellDescartes(n1, n2, ang1) {
    const conversaoRadAng1 = (divide(multiply(ang1,Math.PI),180));
    const senoAng1 = Math.sin(conversaoRadAng1);
    const indiceRefracao = multiply(n1,senoAng1);
    const ang2 = divide(indiceRefracao,n2);
    const arcosenoAng2 = Math.asin(ang2);
    return divide(multiply(arcosenoAng2,180),Math.PI)
}

function calculaLog(x, y) {
    const logX = Math.log(x);
    const logy = Math.log(y);
    return divide(logX,logy);
}

function calculaBhaskara(coef1, coef2, coef3) {
    const delta = subtract(pow(coef2, 2),(multiply(multiply(4,coef1),coef3)));
    const raiz1 = divide((subtract(multiply(coef2, -1),Math.sqrt(delta))),(multiply(2,coef1)));
    const raiz2 = divide((add(multiply(coef2, -1),Math.sqrt(delta))),(multiply(2,coef1)));
    return divide(raiz1,raiz2)
}

function calculoJurosSimples(capital, taxaJuros, numeroPeriodos) {
    return multiply(multiply(capital,taxaJuros), numeroPeriodos)
}

function calculoJurosCompostos(capital, taxaJuros, numeroPeriodos) {
    const taxadeJuros = add(1,taxaJuros);
    const taxaNoPeriodo = Math.pow(taxadeJuros, numeroPeriodos);
    return multiply(capital,taxaNoPeriodo)
}

function calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodos) {
    const taxaNoPeriodo = Math.pow(add(1,taxaJuros), numeroPeriodos);
    const denominador = subtract(1,(divide(1,taxaNoPeriodo)));
    const capitaleTaxa = multiply(capitalInicial,taxaJuros);
    return divide(capitaleTaxa,denominador)
}

function desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores) {
    const diferencaPadrao = Math.pow((subtract(valorIndividual,mediaDosValores)), 2);
    const variancia = divide(diferencaPadrao,numeroDeValores);
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