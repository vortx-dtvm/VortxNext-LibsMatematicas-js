const BigNumber = require('bignumber.js');

function calculaGaussiana(x, media, desvioPadrao) {

    const xB = new BigNumber (x);
    const mediaB = new BigNumber (media);
    const desvioPadraoB = new BigNumber(desvioPadrao);

    const e = new BigNumber(2.71828182845);
    const distribuicao = new BigNumber((((xB.minus(mediaB)).dividedBy(desvioPadraoB)).pow(new BigNumber(2))));
    const eulerElevado = new BigNumber((e).pow(((new BigNumber(-0.5).multipliedBy(distribuicao))).toPrecision()));
    const desvio = (new BigNumber(1).dividedBy(new BigNumber(2).multipliedBy(Math.PI)).sqrt().multipliedBy(desvioPadraoB))
    return eulerElevado.multipliedBy(desvio)
}

function calculaSnellDescartes(n1, n2, ang1) {

    const n1B = new BigNumber(n1);
    const n2B = new BigNumber(n2);
    const ang1B = new BigNumber(ang1);

    const conversaoRadAng1 = (ang1B.multipliedBy(Math.PI)).dividedBy(new BigNumber(180));
    const senoAng1 = Math.sin(conversaoRadAng1);
    const indiceRefracao = n1B.multipliedBy(senoAng1);
    const ang2 = indiceRefracao.dividedBy(n2B);
    const arcosenoAng2 = Math.asin(ang2);
    return Number(new BigNumber(arcosenoAng2).multipliedBy(new BigNumber(180).dividedBy(Math.PI)))
}

function calculaLog(x, y) {

    const xBI = new BigNumber(x);
    const yBI = new BigNumber(y);

    const logX = new BigNumber(Math.log(xBI));
    const logy = new BigNumber(Math.log(yBI));
    return Number(logX.dividedBy(logy));
}

function calculaBhaskara(coef1, coef2, coef3) {

    const coef1B = new BigNumber(coef1);
    const coef2B = new BigNumber(coef2);
    const coef3B = new BigNumber(coef3);

    const delta = new BigNumber(((coef2B).pow(new BigNumber(2)) - ((new BigNumber(4).multipliedBy(coef1B)).multipliedBy(coef3B))));
    const raiz1 = (((coef2B).multipliedBy(new BigNumber(-1))).minus((delta).sqrt())).dividedBy(new BigNumber(2).multipliedBy(coef1B));
    const raiz2 = (((coef2B).multipliedBy(new BigNumber(-1))).plus((delta).sqrt())).dividedBy(new BigNumber(2).multipliedBy(coef1B));
    return Number(raiz1.dividedBy(raiz2))
}

function calculoJurosSimples(capital, taxaJuros, numeroPeriodos) {

    const capitalB = new BigNumber(capital);
    const taxaJurosB = new BigNumber(taxaJuros);
    const numeroPeriodosB = new BigNumber(numeroPeriodos);

    return Number((capitalB.multipliedBy(taxaJurosB)).multipliedBy(numeroPeriodosB))
}

function calculoJurosCompostos(capital, taxaJuros, numeroPeriodos) {

    const capitalB = new BigNumber(capital);
    const taxaJurosB = new BigNumber(taxaJuros);
    const numeroPeriodosB = new BigNumber(numeroPeriodos);

    const taxadeJuros = (new BigNumber(1).plus(taxaJurosB));
    const taxaNoPeriodo = (taxadeJuros).pow(numeroPeriodosB);
    return Number(capitalB.multipliedBy(taxaNoPeriodo))
}

function calculoAmortizacao(capitalInicial, taxaJuros, numeroPeriodos) {

    const capitalInicialB = new BigNumber(capitalInicial);
    const taxaJurosB = new BigNumber(taxaJuros);
    const numeroPeriodosB = new BigNumber(numeroPeriodos);

    const taxaNoPeriodo = ((new BigNumber(1).plus(taxaJurosB)).pow(numeroPeriodosB));
    const denominador = new BigNumber(1).minus((new BigNumber(1).dividedBy(taxaNoPeriodo)));
    const capitaleTaxa = capitalInicialB.multipliedBy(taxaJurosB);
    return Number(capitaleTaxa.dividedBy(denominador))
}

function desvioPadrao(valorIndividual, mediaDosValores, numeroDeValores) {

    const valorIndividualB = new BigNumber(valorIndividual);
    const mediaDosValoresB = new BigNumber(mediaDosValores);
    const numeroDeValoresB = new BigNumber(numeroDeValores);

    const diferencaPadrao = Math.pow((valorIndividualB.minus(mediaDosValoresB)), new BigNumber(2));
    const variancia = new BigNumber(diferencaPadrao).dividedBy(numeroDeValoresB);
    const desvioPadrao = Math.sqrt(variancia, new BigNumber(2));
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