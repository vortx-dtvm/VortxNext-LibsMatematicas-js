const Decimal = require('decimal.js')
const um = new Decimal(1)

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne) {

    const mediaCDIDecimal = new Decimal(mediaCdi)
    const porcentagemDecimal = new Decimal(porcentagem)
    const DpDecimal = new Decimal(dp)
    const fatorDiAcumuladoDecimal = new Decimal(fatorDiAcumuladoAnterior)
    const vneDecimal = new Decimal(vne)

    const di = calculoFatorDi(mediaCDIDecimal)
    const spread = calculoFatorSpread(porcentagemDecimal, DpDecimal)
    const diAcumulado = fatorDiAcumuladoDecimal.times(di)
    const fatorJuros = diAcumulado.times(spread)

    const pu = vneDecimal.times(fatorJuros)

    return {
        spread: spread.toDecimalPlaces(14, Decimal.ROUND_DOWN).toNumber(),
        di: di.toDecimalPlaces(14, Decimal.ROUND_UP).toNumber(),
        diAcumulado: diAcumulado.toDecimalPlaces(14, Decimal.ROUND_UP).toNumber(),
        fatorJuros: fatorJuros.toDecimalPlaces(14, Decimal.ROUND_UP).toNumber(),
        pu: pu.toDecimalPlaces(10, Decimal.ROUND_UP).toNumber(),
    }
}

function calculoFatorDi(mediaCdiB) {

    if (!(mediaCdiB instanceof Decimal)) mediaCdiB = new Decimal(mediaCdiB)

    const doisCincoDois = new Decimal(252)
    const cem = new Decimal(100)
    const div1por252 = (um.dividedBy(doisCincoDois))
    return ((mediaCdiB.dividedBy(cem)).plus(um)).pow(div1por252)
}

function calculoFatorSpread(porcentagemDecimal, dpB) {
    const doisCincoDois = new Decimal(252)
    const divisaoDp = new Decimal(dpB.dividedBy(doisCincoDois))
    return new Decimal(um.plus(porcentagemDecimal)).pow(divisaoDp)
}
function calculoPuPre(vneDecimal, porcentagemDecimal, dpB) {
    dpB = new Decimal(dpB)
    const doisCincoDois = new Decimal(252)
    let divisaoFinal = dpB.dividedBy(doisCincoDois)
    const pu = new Decimal(vneDecimal).times((new Decimal(um.plus(porcentagemDecimal)).pow(divisaoFinal)))
    return Number(pu)
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }