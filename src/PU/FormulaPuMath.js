const { multiply, add, divide, pow, round } = require('mathjs')

function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumulado, vne) {

    const di = calculoFatorDi(mediaCdi)
    const spread = calculoFatorSpread(porcentagem, dp)
    const diAcumulado = multiply(fatorDiAcumulado, di)
    const fatorJuros = multiply(diAcumulado, spread)

    const pu = multiply(vne, fatorJuros)
    return {
        spread: round(spread, 14),
        di: round(di, 14),
        diAcumulado: round(diAcumulado, 14),
        fatorJuros: round(fatorJuros, 14),
        pu: round(pu, 10),
    }
}

function calculoFatorDi(mediaCdi) {
    return pow((add((divide(mediaCdi, 100)), 1)), (divide(1, 252)))
}

function calculoFatorSpread(porcentagem, dp) {
    return pow((add(1, porcentagem)), divide(dp, 252))
}
function calculoPuPre(vne, porcentagem, dp) {
    const fatorJuros = pow((add(1, porcentagem)), divide(dp, 252))
    const pu = multiply(vne, fatorJuros)
    return {
        fatorJuros: round(fatorJuros, 14),
        pu: round(pu, 10),
    }
}

module.exports = { calculoPuPos, calculoPuPre, calculoFatorDi }