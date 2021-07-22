const BigNumber = require('bignumber.js');

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const mediaCdiB = new BigNumber(mediaCdi);
    const porcentagemB = new BigNumber(porcentagem);
    const dpB = new BigNumber(dp);
    const fatorDiAcumuladoB = new BigNumber(fatorDiAcumulado);
    const vneB = new BigNumber(vne);

    const fatordi = (calculoFatorDi(mediaCdiB));
    const fatorspread = calculoFatorSpread(porcentagemB, dpB);
    const fatordiacumulado = fatorDiAcumuladoB.multipliedBy(fatordi);
    const fatorjuros = fatordiacumulado.multipliedBy(fatorspread);

    const pu = (vneB).multipliedBy(fatorjuros);
    return pu
}

function calculoFatorDi(mediaCdiB) {
    const um = new BigNumber(1);
    const doisCincoDois = new BigNumber(252);
    const cem = new BigNumber(100);
    const div1por252 = new BigNumber(um.dividedBy(doisCincoDois));
    return (new BigNumber((mediaCdiB.dividedBy(cem)).plus(um))).pow(div1por252);
}

function calculoFatorSpread(porcentagemB, dpB) {
    const doisCincoDois = new BigNumber(252);
    const divisaoDp = new BigNumber(dpB.dividedBy(doisCincoDois));
    return new BigNumber(um.plus(porcentagemB)).pow(divisaoDp);
}
function calculoPuPre(vneB, porcentagemB, dpB) {
    const doisCincoDois = new BigNumber(252);
    let divisaoFinal = new BigNumber(dpB.dividedBy(doisCincoDois));
    const pu = new BigNumber(vneB).multipliedBy((new BigNumber(um.plus(porcentagemB)).pow(divisaoFinal)));
    return pu
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }