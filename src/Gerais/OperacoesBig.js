const Big = require('big.js');

function calculaGaussiana(x, media, desvioPadrao) {

    const xB = new Big (x);
    const mediaB = new Big (media);
    const desvioPadraoB = new Big(desvioPadrao);

    const e = new Big(2.71828182845);
    const distribuicao = new Big(Math.pow(((xB.minus(mediaB)).div(desvioPadraoB)), new Big(2)));
    const eulerElevado = new Big(Math.pow(e, ((new Big(-0.5).times(distribuicao)))));
    const desvio = (new Big(1).div((new Big(2).times(Math.PI)).sqrt().times(desvioPadraoB)));
    return Number(eulerElevado.times(desvio))
}

function calculaSnellDescartes(n1, n2, ang1) {

    const n1B = new Big(n1);
    const n2B = new Big(n2);
    const ang1B = new Big(ang1);

    const conversaoRadAng1 = (ang1B.times(Math.PI)).div(new Big(180));
    const senoAng1 = Math.sin(conversaoRadAng1);
    const indiceRefracao = n1B.times(senoAng1);
    const ang2 = indiceRefracao.div(n2B);
    const arcosenoAng2 = Math.asin(ang2);
    return arcosenoAng2.times(new Big(180).div(Math.PI()))
}

function calculaLog(x, y) {

    const xBI = new Big(x);
    const yBI = new Big(y);

    const logX = new Big(Math.log(xBI));
    const logy = new Big(Math.log(yBI));
    return Number(logX.div(logy));
}

function calculaBhaskara(coef1, coef2, coef3) {

    const coef1B = new Big(coef1);
    const coef2B = new Big(coef2);
    const coef3B = new Big(coef3);

    const delta = new Big((Math.pow(coef2B, new Big(2)) - ((new Big(4).times(coef1B)).times(coef3B))));
    const raiz1 = (((coef2B).times(new Big(-1))).minus((delta).sqrt())).div(new Big(2).times(coef1B));
    const raiz2 = (((coef2B).times(new Big(-1))).plus((delta).sqrt())).div(new Big(2).times(coef1B));
    return Number(raiz1.div(raiz2))
}

function calculoJurosSimples(capital, taxaJuros, numeroPeriodos) {

    const capitalB = new Big(capital);
    const taxaJurosB = new Big(taxaJuros);
    const numeroPeriodosB = new Big(numeroPeriodos);

    return Number((capitalB.times(taxaJurosB)).times(numeroPeriodosB))
}

function calculoJurosCompostos(capital, taxaJuros, numeroPeriodos) {

    const capitalB = new Big(capital);
    const taxaJurosB = new Big(taxaJuros);
    const numeroPeriodosB = new Big(numeroPeriodos);

    const taxadeJuros = (new Big(1).plus(taxaJurosB));
    const taxaNoPeriodo = Math.pow(taxadeJuros, numeroPeriodosB);
    return Number(capitalB.times(taxaNoPeriodo))
}

function calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodos) {

    const capitalInicialB = new Big(capitalInicial);
    const taxaJurosB = new Big(taxaJuros);
    const numeroPeriodosB = new Big(numeroPeriodos);

    const taxaNoPeriodo = Math.pow((new Big(1).plus(taxaJurosB)), numeroPeriodosB);
    const denominador = new Big(1) - (new Big(1).div(taxaNoPeriodo));
    const capitaleTaxa = capitalInicialB.times(taxaJurosB);
    return Number(capitaleTaxa.div(denominador))
}

function desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores) {

    const valorIndividualB = new Big(valorIndividual);
    const mediaDosValoresB = new Big(mediaDosValores);
    const numeroDeValoresB = new Big(numeroDeValores);

    const diferencaPadrao = Math.pow((valorIndividualB.minus(mediaDosValoresB)), new Big(2));
    const variancia = new Big(diferencaPadrao).div(numeroDeValoresB);
    const desvioPadrao = Math.sqrt(variancia, new Big(2));
    return Number(desvioPadrao)
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