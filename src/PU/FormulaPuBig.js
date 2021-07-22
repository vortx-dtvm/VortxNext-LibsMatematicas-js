const Big = require('big.js');

const um = new Big(1);
const doisCincoDois = new Big(252);
const cem = new Big(100);

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const mediaCdiB = new Big(mediaCdi);
    const porcentagemB = new Big(porcentagem);
    const dpB = new Big(dp);
    const fatorDiAcumuladoB = new Big(fatorDiAcumulado);
    const vneB = new Big(vne);

    const fatordi = calculoFatorDi(mediaCdiB);
    const fatorspread = calculoFatorSpread(porcentagemB, dpB);
    const fatordiacumulado = fatorDiAcumuladoB.times(fatordi);
    const fatorjuros = fatordiacumulado.times(fatorspread);

    const pu = (vneB).times(fatorjuros);
    return Number(pu.toPrecision());
}

function calculoPuPre(vne, porcentagem, dp) {

    const vneB = new Big(vne)
    const porcentagemB = new Big(porcentagem)
    const dpB = new Big(dp)


    const divisaoFinal = dpB.div(doisCincoDois);
    const taxa = new Big(Math.pow((um.plus(porcentagemB)), divisaoFinal.toPrecision()))

    const pu = vneB.times(taxa)

    return Number(pu.toPrecision());
}

function calculoFatorDi(mediaCdiB) {
    mediaCdiB = typeof mediaCdiB === 'number' ? new Big(mediaCdiB) : mediaCdiB

    const div1por252 = um.div(doisCincoDois)
    const taxa = ((mediaCdiB.div(cem)).plus(um))
    return new Big(Math.pow(taxa, div1por252.toPrecision()))
}

function calculoFatorSpread(porcentagemB, dpB) {
    const divisaoDp = dpB.div(doisCincoDois);

    return new Big(Math.pow((um.plus(porcentagemB)), divisaoDp.toPrecision()));
}


module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }