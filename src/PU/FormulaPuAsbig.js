const Big = require('../as-Big')

function calculoPuPos(mediaCDI, porcentagem, dp, DiAcomuladoAnterior, vne) {

    const DI = calculoFatorDi(mediaCDI)
    const spread = calculoFatorSpread(porcentagem, dp)
    const acomuladoDIA = Big.of(DiAcomuladoAnterior).times(DI)
    const fJuros = acomuladoDIA.times(spread)
    const pu = Big.of(vne).times(fJuros)

    return toFixed(pu, 10)
}

function calculoFatorDi(mediaCDI) {
    const cem = Big.of(100)
    const div1por252 = 0.003968253968253968
    const fatorDi = Big.of(Math.pow((Big.of(mediaCDI).div(cem)).plus(Big.ONE).toNumber(), div1por252))
    return fatorDi
}

function calculoFatorSpread(porcentagem, dp) {
    const divisaoDp = 0.14285714285714285714
    const spread = Big.of(Math.pow(Big.ONE.plus(porcentagem).toNumber(), divisaoDp))

    return spread

}
function calculoPuPre(vne, porcentagem, dp) {
    const divisaoFinal = 0.003968253968253968
    let fatorJuros = Big.of(Math.pow(Big.ONE.plus(porcentagem).toNumber(), divisaoFinal))
    const pu = Big.of(vne).times(fatorJuros)
    return pu.toString()
}

module.exports = { calculoPuPos, calculoPuPre }