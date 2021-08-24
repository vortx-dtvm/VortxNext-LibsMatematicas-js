const { Big } = require('as-big')

function calculoPuPos(mediaCDI, porcentagem, dp, DiAcomuladoAnterior, vne) {

    const DI = calculoFatorDi(mediaCDI)
    const spread = calculoFatorSpread(porcentagem, dp)
    const acomuladoDIA = DiAcomuladoAnterior * DI
    const fJuros = acomuladoDIA * spread

    return Big.of(vne).times(fJuros)
}

function calculoFatorDi(mediaCDI) {
    return ((Big.of(mediaCDI).div(100)).plus(Big.one)).pow((Big.one.div(252)))
}

function calculoFatorSpread(porcentagem, dp) {
    return (Big.of(porcentagem).plus(Big.one)).pow((Big.of(dp).div(252)))
}
function calculoPuPre(vne, porcentagem, dp) {
    return (Big.of(porcentagem).plus(Big.one)).pow((Big.of(dp).div(252))).times(vne)
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }