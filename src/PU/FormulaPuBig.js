const Big = require('big.js');

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const mediaCdiB = new Big(mediaCdi);
    const porcentagemB = new Big(porcentagem);
    const dpB = new Big(dp);
    const fatorDiAcumuladoB = new Big(fatorDiAcumulado);
    const vneB = new Big(vne);

    const fatordi = (calculoFatorDi(mediaCdiB));
    const fatorspread = calculoFatorSpread(porcentagemB, dpB);
    const fatordiacumulado = fatorDiAcumuladoB.times(fatordi);
    const fatorjuros = fatordiacumulado.times(fatorspread);

    const pu = (vneB).times(fatorjuros);
    return pu
}

function calculoFatorDi(mediaCdiB) {
    const um = new Big(1);
    const doisCincoDois = new Big(252);
    const cem = new Big(100);
    const div1por252 = new Big (um.div(doisCincoDois))
    return (new Big((mediaCdiB.div(cem)).plus(um))).pow(div1por252);
}

function calculoFatorSpread(porcentagemB, dpB) {
    const divisaoDp = new Big(dpB.div(doisCincoDois));
    return new Big(um.plus(porcentagemB)).pow(divisaoDp);
}
function calculoPuPre(vneB, porcentagemB, dpB) {
    let divisaoFinal = new Big(dpB.div(doisCincoDois));
    const pu = new Big(vneB).times((new Big(um.plus(porcentagemB)).pow(divisaoFinal)));
    return pu
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }