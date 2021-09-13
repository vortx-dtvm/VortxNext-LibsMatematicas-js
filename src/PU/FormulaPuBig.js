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

    const di = calculoFatorDi(mediaCdiB);
    const spread = calculoFatorSpread(porcentagemB, dpB);
    const diAcumulado = fatorDiAcumuladoB.times(di);
    const fatorJuros = diAcumulado.times(spread);

    const pu = (vneB).times(fatorJuros);


    return {
        spread: spread.round(14, Big.roundDown).toNumber(),
        di: di.round(14, Big.roundUp).toNumber(),
        diAcumulado: diAcumulado.round(14, Big.roundUp).toNumber(),
        fatorJuros: fatorJuros.round(14, Big.roundUp).toNumber(),
        pu: pu.round(10, Big.roundUp).toNumber(),
    }
}

function calculoPuPre(vne, porcentagem, dp) {
    const vneB = new Big(vne)
    const porcentagemB = new Big(porcentagem)
    const dpB = new Big(dp)


    const divisaoFinal = dpB.div(doisCincoDois);
    const fatorJuros = new Big(Math.pow((um.plus(porcentagemB)), divisaoFinal.toPrecision()))

    const pu = vneB.times(fatorJuros)

    return {
        pu: pu.round(10, Big.roundUp).toNumber(),
        fatorJuros: fatorJuros.round(14, Big.roundDown).toNumber(),
    }
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


module.exports = { calculoPuPos, calculoPuPre, calculoFatorDi }