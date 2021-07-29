const Decimal = require('decimal.js');
const um = new Decimal(1);

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const mediaCdiB = new Decimal(mediaCdi);
    const porcentagemB = new Decimal(porcentagem);
    const dpB = new Decimal(dp);
    const fatorDiAcumuladoB = new Decimal(fatorDiAcumulado);
    const vneB = new Decimal(vne);

    const fatordi = calculoFatorDi(mediaCdiB);
    const fatorspread = calculoFatorSpread(porcentagemB, dpB);
    const fatordiacumulado = fatorDiAcumuladoB.times(fatordi);
    const fatorjuros = (fatordiacumulado.times(fatorspread));

    const pu = (vneB).times(fatorjuros);
    return Number(pu)
}

function calculoFatorDi(mediaCdiB) {

    if (!(mediaCdiB instanceof Decimal)) mediaCdiB = new Decimal(mediaCdiB)

    const doisCincoDois = new Decimal(252);
    const cem = new Decimal(100);
    const div1por252 = (um.dividedBy(doisCincoDois));
    return ((mediaCdiB.dividedBy(cem)).plus(um)).pow(div1por252);
}

function calculoFatorSpread(porcentagemB, dpB) {
    const doisCincoDois = new Decimal(252);
    const divisaoDp = new Decimal(dpB.dividedBy(doisCincoDois));
    return new Decimal(um.plus(porcentagemB)).pow(divisaoDp);
}
function calculoPuPre(vneB, porcentagemB, dpB) {
    dpB = new Decimal(dpB)
    const doisCincoDois = new Decimal(252);
    let divisaoFinal = dpB.dividedBy(doisCincoDois);
    const pu = new Decimal(vneB).times((new Decimal(um.plus(porcentagemB)).pow(divisaoFinal)));
    return Number(pu)
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }