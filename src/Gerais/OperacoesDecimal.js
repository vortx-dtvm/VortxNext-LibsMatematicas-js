const Decimal = require('decimal.js');
const { floorFigure } = require("../Util")

function calculaGaussiana(x, media, desvioPadrao) {

    const xB = new Decimal (x);
    const mediaB = new Decimal (media);
    const desvioPadraoB = new Decimal(desvioPadrao);

    const e = new Decimal(2.71828182845);
    const distribuicao = new Decimal(((xB.minus(mediaB)).dividedBy(desvioPadraoB)).pow(new Decimal(2)))
    const eulerElevado = e.pow(new Decimal(-0.5).times(distribuicao))
    const desvio = new Decimal(1).dividedBy(((new Decimal(2).times(Math.PI)).sqrt()).times(desvioPadraoB))
    return Number(floorFigure((eulerElevado.times(desvio).toPrecision()), 19))
}

function calculaSnellDescartes(n1, n2, ang1) {

    const n1B = new Decimal(n1);
    const n2B = new Decimal(n2);
    const ang1B = new Decimal(ang1);

    const conversaoRadAng1 = (ang1B.times(Math.PI)).dividedBy(new Decimal(180));
    const senoAng1 = Math.sin(conversaoRadAng1);
    const indiceRefracao = n1B.times(senoAng1);
    const ang2 = indiceRefracao.dividedBy(n2B);
    const arcosenoAng2 = Math.asin(ang2);
    return Number(new Decimal(arcosenoAng2).times(new Decimal(180).dividedBy(Math.PI)))
}

function calculaLog(x, y) {

    const xBI = new Decimal(x);
    const yBI = new Decimal(y);

    const logX = new Decimal((xBI).log(10));
    const logy = new Decimal((yBI).log(10));
    return Number(logX.dividedBy(logy));
}

function calculaBhaskara(coef1, coef2, coef3) {

    const coef1B = new Decimal(coef1);
    const coef2B = new Decimal(coef2);
    const coef3B = new Decimal(coef3);

    const delta = new Decimal(((coef2B).pow(new Decimal(2)) - ((new Decimal(4).times(coef1B)).times(coef3B))));
    const raiz1 = (((coef2B).times(new Decimal(-1))).minus((delta).sqrt())).dividedBy(new Decimal(2).times(coef1B));
    const raiz2 = (((coef2B).times(new Decimal(-1))).plus((delta).sqrt())).dividedBy(new Decimal(2).times(coef1B));
    return Number(raiz1.dividedBy(raiz2))
}

function calculoJurosSimples(capital, taxaJuros, numeroPeriodos) {

    const capitalB = new Decimal(capital);
    const taxaJurosB = new Decimal(taxaJuros);
    const numeroPeriodosB = new Decimal(numeroPeriodos);

    return Number((capitalB.times(taxaJurosB)).times(numeroPeriodosB))
}

function calculoJurosCompostos(capital, taxaJuros, numeroPeriodos) {

    const capitalB = new Decimal(capital);
    const taxaJurosB = new Decimal(taxaJuros);
    const numeroPeriodosB = new Decimal(numeroPeriodos);

    const taxadeJuros = (new Decimal(1).plus(taxaJurosB));
    const taxaNoPeriodo = (taxadeJuros).pow(numeroPeriodosB);
    return Number(capitalB.times(taxaNoPeriodo))
}

function calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodos) {

    const capitalInicialB = new Decimal(capitalInicial);
    const taxaJurosB = new Decimal(taxaJuros);
    const numeroPeriodosB = new Decimal(numeroPeriodos);

    const taxaNoPeriodo = ((new Decimal(1).plus(taxaJurosB)).pow(numeroPeriodosB));
    const denominador = new Decimal(1).minus((new Decimal(1).dividedBy(taxaNoPeriodo)));
    const capitaleTaxa = capitalInicialB.times(taxaJurosB);
    return Number(capitaleTaxa.dividedBy(denominador))
}

function desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores) {

    const valorIndividualB = new Decimal(valorIndividual);
    const mediaDosValoresB = new Decimal(mediaDosValores);
    const numeroDeValoresB = new Decimal(numeroDeValores);

    const diferencaPadrao = Math.pow((valorIndividualB.minus(mediaDosValoresB)), new Decimal(2));
    const variancia = new Decimal(diferencaPadrao).dividedBy(numeroDeValoresB);
    const desvioPadrao = Math.sqrt(variancia, new Decimal(2));
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